'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const pathname = usePathname();

  useEffect(() => {
    // Re-check forced dark mode on every route change
    const isForcedDark = pathname?.startsWith('/admin') || pathname?.startsWith('/dashboard');

    if (isForcedDark) {
      setThemeState('dark');
      document.documentElement.classList.add('dark');
      return;
    }

    // Check localStorage on mount or non-forced routes
    const savedTheme = localStorage.getItem('taklifnoma_theme') as Theme;
    const initialTheme = savedTheme || 'light';
    setThemeState(initialTheme);
    
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [pathname]);

  const setTheme = (newTheme: Theme) => {
    const pathname = window.location.pathname;
    const isForcedDark = pathname.startsWith('/admin') || pathname.startsWith('/dashboard');
    
    const themeToSet = isForcedDark ? 'dark' : newTheme;

    setThemeState(themeToSet);
    localStorage.setItem('taklifnoma_theme', themeToSet);
    
    if (themeToSet === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
