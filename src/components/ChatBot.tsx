'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import Collapse from '@mui/material/Collapse';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import RefreshIcon from '@mui/icons-material/Refresh';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import profile from '@/lib/profile';
import {
  sendChatMessage,
  isChatConfigured,
  SUGGESTED_QUESTIONS,
  type ChatMessage,
} from '@/lib/gemini';

const GREETING: ChatMessage = {
  role: 'model',
  text: `Hi! I'm ${profile.shortName}'s AI assistant. Ask me anything about his experience, skills or projects.`,
};

export default function ChatBot() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const scrollRef = React.useRef<HTMLDivElement>(null);
  const abortRef = React.useRef<AbortController | null>(null);

  // Keep the newest message in view as the conversation grows.
  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  // Abort any in-flight request if the component goes away.
  React.useEffect(() => () => abortRef.current?.abort(), []);

  const submit = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setError(null);
    setInput('');

    // The greeting is UI-only, so it is excluded from what the model sees.
    const history = [...messages.slice(1), { role: 'user' as const, text: trimmed }];
    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setLoading(true);

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const reply = await sendChatMessage(history, controller.signal);
      setMessages((prev) => [...prev, { role: 'model', text: reply }]);
    } catch (err) {
      if ((err as Error).name === 'AbortError') return;
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    abortRef.current?.abort();
    setMessages([GREETING]);
    setError(null);
    setInput('');
    setLoading(false);
  };

  const showSuggestions = messages.length === 1 && !loading;

  return (
    <>
      {/* Launcher */}
      <Tooltip title={open ? 'Close chat' : `Ask about ${profile.shortName}`} placement="left">
        <Fab
          color="primary"
          aria-label={open ? 'Close chat' : 'Open chat'}
          onClick={() => setOpen((o) => !o)}
          sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: (t) => t.zIndex.drawer + 2 }}
        >
          {open ? <CloseIcon /> : <ChatBubbleOutlineIcon />}
        </Fab>
      </Tooltip>

      {/* Panel */}
      <Collapse
        in={open}
        orientation="vertical"
        sx={{
          position: 'fixed',
          bottom: 96,
          right: { xs: 12, sm: 24 },
          left: { xs: 12, sm: 'auto' },
          zIndex: (t) => t.zIndex.drawer + 1,
        }}
      >
        <Paper
          elevation={12}
          sx={{
            width: { xs: 'auto', sm: 400 },
            height: { xs: '65vh', sm: 540 },
            maxHeight: 'calc(100vh - 140px)',
            borderRadius: 4,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{ px: 2, py: 1.75, bgcolor: 'primary.main', color: 'primary.contrastText' }}
          >
            <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', width: 34, height: 34 }}>
              <AutoAwesomeIcon fontSize="small" />
            </Avatar>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                Ask about {profile.shortName}
              </Typography>
            </Box>
            <Tooltip title="New conversation">
              <IconButton size="small" onClick={reset} sx={{ color: 'inherit' }} aria-label="Reset conversation">
                <RefreshIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Stack>

          {/* Messages */}
          <Box ref={scrollRef} sx={{ flex: 1, overflowY: 'auto', px: 2, py: 2 }}>
            <Stack spacing={1.5}>
              {messages.map((m, idx) => (
                <Box
                  key={idx}
                  sx={{
                    alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '85%',
                    px: 1.75,
                    py: 1.25,
                    borderRadius: 2.5,
                    borderTopRightRadius: m.role === 'user' ? 4 : undefined,
                    borderTopLeftRadius: m.role === 'model' ? 4 : undefined,
                    bgcolor: m.role === 'user' ? 'primary.main' : 'action.hover',
                    color: m.role === 'user' ? 'primary.contrastText' : 'text.primary',
                  }}
                >
                  <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.65 }}>
                    {m.text}
                  </Typography>
                </Box>
              ))}

              {loading && (
                <Box sx={{ alignSelf: 'flex-start', px: 1.75, py: 1.5, borderRadius: 2.5, bgcolor: 'action.hover' }}>
                  <CircularProgress size={14} />
                </Box>
              )}
            </Stack>

            {showSuggestions && (
              <Stack spacing={0.75} sx={{ mt: 2.5 }}>
                <Typography variant="caption" color="text.secondary">
                  Try asking
                </Typography>
                <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap>
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <Chip
                      key={q}
                      label={q}
                      size="small"
                      variant="outlined"
                      onClick={() => submit(q)}
                      sx={{ fontSize: '0.72rem', borderRadius: 0 }}
                    />
                  ))}
                </Stack>
              </Stack>
            )}
          </Box>

          {/* Footer */}
          <Box sx={{ p: 1.5, borderTop: '1px solid', borderColor: 'divider' }}>
            {!isChatConfigured && (
              <Alert severity="info" sx={{ mb: 1.5, fontSize: '0.78rem' }}>
                Chat is not configured. Set <code>NEXT_PUBLIC_GEMINI_API_KEY</code> and rebuild.
              </Alert>
            )}
            {error && (
              <Alert severity="error" onClose={() => setError(null)} sx={{ mb: 1.5, fontSize: '0.78rem' }}>
                {error}
              </Alert>
            )}
            <Box
              component="form"
              onSubmit={(e: React.FormEvent) => {
                e.preventDefault();
                submit(input);
              }}
              sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}
            >
              <TextField
                fullWidth
                size="small"
                multiline
                maxRows={4}
                placeholder="Ask a question…"
                value={input}
                disabled={!isChatConfigured}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    submit(input);
                  }
                }}
                inputProps={{ 'aria-label': 'Chat message' }}
              />
              <IconButton
                type="submit"
                color="primary"
                disabled={!input.trim() || loading || !isChatConfigured}
                aria-label="Send message"
              >
                <SendIcon />
              </IconButton>
            </Box>
          </Box>
        </Paper>
      </Collapse>
    </>
  );
}
