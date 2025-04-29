'use client';

import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const LoadingScreen = () => {
    return (
        <Box
            sx={(theme) => ({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100vw',
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
            })}
        >
            <CircularProgress />
        </Box>
    );
};

export default LoadingScreen;