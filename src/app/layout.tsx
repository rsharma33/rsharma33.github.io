import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto, Rubik } from 'next/font/google';
import Head from 'next/head';

import './globals.scss';
import ClientLayout from '../layouts/ClientLayout';
import { AppProvider } from '@/context/AppContext';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const rubik = Rubik({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${roboto.className} ${rubik.className}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <title>My App</title>
      </Head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppProvider>
            <ClientLayout>
              {children}
            </ClientLayout>
          </AppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}