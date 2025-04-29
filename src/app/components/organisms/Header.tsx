// src/app/components/organisms/Header.tsx

'use client';

import { Box, IconButton, Skeleton } from '@mui/material';
import { ThemeSwitch } from '../atoms/ThemeSwitch';
import React, { useState } from 'react';
import { User } from '@/domain/user';
import Profile from './Profile';
import BuildIcon from '@mui/icons-material/Build';
import { ERole } from '@/utils/constants/roles.enum';
import AnimatedAlert from '../atoms/Alert';

interface HeaderProps {
  user: User | undefined;
  isLoadingUser: boolean;
  onThemeToggle: () => void;
  themeMode: string;
}

export default function Header({
  user,
  isLoadingUser,
  onThemeToggle,
  themeMode
}: HeaderProps): JSX.Element {

  const [showAlert, setShowAlert] = useState(false);

  const handleCLick = () => {
    setShowAlert(true);
  }
  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <Box
      sx={(theme) => ({
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        p: 1,
        height: '64px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        display: 'flex',
        justifyContent: 'end',
        width: '100vw',
        paddingX: '10%',
        borderBottom: `1px solid ${theme.palette.divider}`,
      })}
    >
      <Box display="flex" alignItems="center" gap="1rem" height="100%">
        <ThemeSwitch theme={themeMode} setTheme={onThemeToggle} />
        {user?.roles && user?.roles.includes(ERole.ADMIN) && (
          <IconButton sx={{ marginRight: '8px' }} onClick={handleCLick}>
            <BuildIcon sx={{ color: '#DBAE5A' }} />
          </IconButton>
        )}

        {isLoadingUser ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{ bgcolor: 'grey.300' }}
          />
        ) : (
          <Profile user={user} />
        )}
        <AnimatedAlert open={showAlert} onClose={handleClose} message={'You are logged as an admin user'} />

      </Box>
    </Box>
  );
}
