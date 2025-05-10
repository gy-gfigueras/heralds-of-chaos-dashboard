'use client';

import React from 'react';
import { MenuEntity } from './components/atoms/MenuEntity';
import { Box } from '@mui/material';
import { useLanguage } from '@/contexts/LanguageContext';
import { menuTranslations } from '@/translations/menu';

export default function Home() {
  const { language } = useLanguage();
  const t = menuTranslations[language as keyof typeof menuTranslations];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: ['column', "column", 'row'],
        alignItems: 'center',
        justifyContent: ['start', "center"],
        paddingTop: ['100px', '64px'],
        height: '100vh',
        gap: ['1.5rem', '3rem'],
      }}
    >
      <MenuEntity
        delay={0.5}
        text={t.characters}
        image={'/svg/characters.svg'}
        link={'/characters'}
      />
      <MenuEntity
        delay={1}
        text={t.worlds}
        image={'/svg/characters.svg'}
        link={'/worlds'}
      />
      <MenuEntity
        delay={1.5}
        text={t.items}
        image={'/svg/characters.svg'}
        link={'/items'}
      />
      <MenuEntity
        delay={2}
        text={t.creatures}
        image={'/svg/characters.svg'}
        link={'/creatures'}
      />
    </Box>
  );
}
