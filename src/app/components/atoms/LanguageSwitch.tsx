'use client';

import React from 'react';
import { Box, Switch, Typography } from '@mui/material';
import { useLanguage } from '@/contexts/LanguageContext';
import { elMessiri } from '@/utils/fonts/fonts';

export default function LanguageSwitch() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <Box
            sx={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                zIndex: 1000,
            }}
        >
            <Typography
                sx={{
                    fontFamily: elMessiri.style.fontFamily,
                    color: '#997A3E',
                    fontSize: '14px',
                }}
            >
                ES
            </Typography>
            <Switch
                checked={language === 'en'}
                onChange={toggleLanguage}
                sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#997A3E',
                        '& + .MuiSwitch-track': {
                            backgroundColor: '#997A3E',
                        },
                    },
                }}
            />
            <Typography
                sx={{
                    fontFamily: elMessiri.style.fontFamily,
                    color: '#997A3E',
                    fontSize: '14px',
                }}
            >
                EN
            </Typography>
        </Box>
    );
} 