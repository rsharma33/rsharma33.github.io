'use client'
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '@/themes/defaultTheme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import { Rubik, Roboto } from 'next/font/google';
import Head from 'next/head';

import './globals.css';
import ClientLayout from './ClientLayout';

// Theme mode context
const ThemeModeContext = React.createContext({
  mode: 'system',
  setMode: (mode: 'light' | 'dark' | 'system') => {},
});

// const rubik = Rubik({
//   weight: ['300', '400', '500', '700', '900'],
//   subsets: ['latin'],
//   display: 'swap',
// });

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  const [loading, setLoading] = React.useState(true);
  const [mode, setMode] = React.useState<'light' | 'dark' | 'system'>(
    typeof window !== 'undefined'
      ? (localStorage.getItem('theme-mode') as 'light' | 'dark' | 'system') || 'system'
      : 'system'
  );

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-mode', mode);
    }
  }, [mode]);

  // Determine theme
  let appliedTheme = lightTheme;
  if (mode === 'dark') appliedTheme = darkTheme;
  if (mode === 'light') appliedTheme = lightTheme;
  if (mode === 'system') {
    if (typeof window !== 'undefined') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      appliedTheme = isDark ? darkTheme : lightTheme;
    }
  }

  return (
    <html lang="en" suppressHydrationWarning className={`${roboto.className}`}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
      </Head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeModeContext.Provider value={{ mode, setMode }}>
            <ThemeProvider theme={appliedTheme}>
              <ClientLayout>
                <CssBaseline />
                {loading ? (
                  <Preloader />
                ) : (
                  <>
                    {children}
                  </>
                )}
              </ClientLayout>
            </ThemeProvider>
          </ThemeModeContext.Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

export { ThemeModeContext };