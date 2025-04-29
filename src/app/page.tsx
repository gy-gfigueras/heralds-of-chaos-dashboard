import React from 'react';
import { MenuEntity } from './components/atoms/MenuEntity';
import { Box } from '@mui/material';

export default function Home() {
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
        text={'Characters'}
        image={'/svg/characters.svg'}
        link={'/characters'}
      />
      <MenuEntity
        delay={1}
        text={'Worlds'}
        image={'/svg/characters.svg'}
        link={'/worlds'}
      />
      <MenuEntity
        delay={1.5}
        text={'Items'}
        image={'/svg/characters.svg'}
        link={'/items'}
      />
      <MenuEntity
        delay={2}
        text={'Creatures'}
        image={'/svg/characters.svg'}
        link={'/creatures'}
      />
    </Box>
  );
}
