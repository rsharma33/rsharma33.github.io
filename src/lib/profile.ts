import profile from '@/config/data/profile.json';

export type Profile = typeof profile;

/** Years of professional experience, derived from careerStart so it never goes stale. */
export function yearsOfExperience(from: string = profile.careerStart): number {
  const start = new Date(from);
  const ms = Date.now() - start.getTime();
  return Math.floor(ms / (1000 * 60 * 60 * 24 * 365.25));
}

export default profile;
