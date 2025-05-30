'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

type Mode = 'light' | 'dark' | 'system';

interface AppContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  // Add more global state here as needed
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<Mode>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedMode = (typeof window !== 'undefined' && localStorage.getItem('theme-mode')) as Mode | null;
    setMode(savedMode || 'system');
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-mode', mode);
    }
  }, [mode, mounted]);

  if (!mounted) return null;

  return (
    <AppContext.Provider value={{ mode, setMode }}>
      {children}
    </AppContext.Provider>
  );
};