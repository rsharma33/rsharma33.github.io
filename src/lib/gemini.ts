import profile, { yearsOfExperience } from '@/lib/profile';
import experience from '@/config/data/experience.json';
import skills from '@/config/data/skills.json';
import qualification from '@/config/data/qualification.json';
import certifications from '@/config/data/certifications.json';
import projects from '@/config/data/projects.json';

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models';

/**
 * Tried in order; the next model is used when one is exhausted or overloaded.
 * Override with NEXT_PUBLIC_GEMINI_MODELS as a comma-separated list.
 *
 * Verified against the live API on 2026-09-02. The 2.x flash models were
 * deliberately left out: Google now returns a hard 404 ("no longer available
 * to new users") for them, so they would only cost a wasted round trip.
 */
const DEFAULT_MODELS = [
  'gemini-3.6-flash',
  'gemini-3.7-flash',
  'gemini-3.5-flash',
  'gemini-3.5-flash-lite',
  'gemini-3.8-flash',
];

const MODELS: string[] = (
  process.env.NEXT_PUBLIC_GEMINI_MODELS?.split(',') ??
  (process.env.NEXT_PUBLIC_GEMINI_MODEL ? [process.env.NEXT_PUBLIC_GEMINI_MODEL] : DEFAULT_MODELS)
)
  .map((m) => m.trim())
  .filter(Boolean);

/** Quota, overload, and retired-model responses are all worth retrying elsewhere. */
const FALLBACK_STATUSES = new Set([404, 429, 500, 502, 503, 504]);

export const isChatConfigured = Boolean(API_KEY);

export type ChatRole = 'user' | 'model';
export type ChatMessage = { role: ChatRole; text: string };

/**
 * The whole resume is inlined as grounding context. It is a few KB of JSON, which is
 * cheaper and more reliable than trying to retrieve over a document this small.
 */
function buildSystemPrompt(): string {
  const resume = {
    profile: {
      name: profile.name,
      title: profile.title,
      company: profile.company,
      location: profile.location,
      yearsOfExperience: yearsOfExperience(),
      summary: profile.summary,
      about: profile.about,
      links: profile.links,
    },
    experience,
    skills,
    education: qualification,
    certifications,
    projects,
  };

  return [
    `You are the assistant on ${profile.name}'s portfolio website.`,
    `Your job is to answer visitors' questions about ${profile.shortName}'s background, skills, work history and projects.`,
    '',
    'Rules:',
    `- Answer only from the RESUME DATA below. If something is not in it, say you do not have that detail and point the visitor to ${profile.links.linkedin}.`,
    '- Never invent employers, dates, job titles, certifications or metrics.',
    '- Be concise: 2-4 sentences, or a short list when comparing several things.',
    `- Refer to him as "${profile.shortName}". Use they/them only if you need a pronoun and are unsure.`,
    '- Speak as a helpful third party, not in first person as him.',
    '- For recruiting or contact questions, direct visitors to his LinkedIn.',
    '- Stay on topic. If asked something unrelated to his career, politely redirect.',
    '',
    'RESUME DATA (JSON):',
    JSON.stringify(resume),
  ].join('\n');
}

export const SUGGESTED_QUESTIONS = [
  'What is Rajesh working on now?',
  'Summarise his front-end experience.',
  'Has he worked with cloud platforms?',
  'What did he do at Accenture?',
];

/** One attempt against a single model. Throws with `.status` attached on HTTP errors. */
async function callModel(
  model: string,
  history: ChatMessage[],
  signal?: AbortSignal
): Promise<string> {
  const res = await fetch(`${ENDPOINT}/${model}:generateContent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': API_KEY as string,
    },
    signal,
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: buildSystemPrompt() }] },
      contents: history.map((m) => ({ role: m.role, parts: [{ text: m.text }] })),
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 1024,
      },
    }),
  });

  if (!res.ok) {
    let detail = `${res.status} ${res.statusText}`;
    try {
      const body = await res.json();
      if (body?.error?.message) detail = body.error.message;
    } catch {
      /* response body was not JSON — keep the status line */
    }
    const err = new Error(detail) as Error & { status?: number };
    err.status = res.status;
    throw err;
  }

  const data = await res.json();

  if (data?.promptFeedback?.blockReason) {
    throw new Error('That question was blocked by the safety filter. Try rephrasing it.');
  }

  const text: string = (data?.candidates?.[0]?.content?.parts ?? [])
    .map((p: { text?: string }) => p.text ?? '')
    .join('')
    .trim();

  if (!text) {
    // A thinking model that spends its whole budget reasoning returns no text part.
    const reason = data?.candidates?.[0]?.finishReason;
    const err = new Error(
      reason === 'MAX_TOKENS'
        ? 'The reply was cut off before any text was produced. Please try again.'
        : 'The model returned an empty response. Please try again.'
    ) as Error & { status?: number };
    err.status = 503; // treat as transient so the next model gets a turn
    throw err;
  }

  return text;
}

export async function sendChatMessage(
  history: ChatMessage[],
  signal?: AbortSignal
): Promise<string> {
  if (!API_KEY) {
    throw new Error(
      'Chat is not configured. Set NEXT_PUBLIC_GEMINI_API_KEY in your environment and rebuild.'
    );
  }
  if (MODELS.length === 0) throw new Error('No Gemini model is configured.');

  let lastError: Error | undefined;

  for (const model of MODELS) {
    try {
      return await callModel(model, history, signal);
    } catch (err) {
      const e = err as Error & { status?: number };
      if (e.name === 'AbortError') throw e;

      // A bad key or malformed request fails identically on every model.
      if (e.status !== undefined && !FALLBACK_STATUSES.has(e.status)) throw e;
      if (e.status === undefined && !/empty response|cut off/i.test(e.message)) throw e;

      lastError = e;
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`[gemini] ${model} unavailable (${e.status ?? 'n/a'}), trying next`);
      }
    }
  }

  throw new Error(
    `All Gemini models are unavailable right now. Last error: ${lastError?.message ?? 'unknown'}`
  );
}
