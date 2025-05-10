'use client';

import React, { useEffect, useState } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { useUser } from '@/hooks/useUser';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Header from './components/organisms/Header';
import LoadingScreen from './components/organisms/LoadingScreen';
import { AnimatePresence } from 'framer-motion';
import { createAppTheme } from '@/utils/constants/theme';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LanguageSwitch from './components/atoms/LanguageSwitch';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading: isLoadingUser } = useUser();
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      const minLoadTime = new Promise((resolve) => setTimeout(resolve, 1000));

      const savedTheme =
        localStorage.getItem('themeMode') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

      setThemeMode(savedTheme as 'light' | 'dark');

      await minLoadTime;

      setIsLoading(false);
    };

    initializeApp();
  }, []);

  const toggleTheme = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  const theme = createAppTheme(themeMode);

  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <LanguageSwitch />
          <ThemeProvider theme={theme}>
            <UserProvider>
              <CssBaseline />
              <AnimatePresence mode="wait">
                {isLoading || isLoadingUser ? (
                  <LoadingScreen key="loading" />
                ) : (
                  <Box
                    key="content"
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      minHeight: '100vh',
                      width: '100%',
                    }}
                  >
                    <Header themeMode={themeMode} onThemeToggle={toggleTheme} isLoadingUser={isLoadingUser} user={user} />
                    {children}
                  </Box>
                )}
              </AnimatePresence>
            </UserProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html >
  );
}