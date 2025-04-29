'use client';
import { Box, Skeleton } from '@mui/material';
import React from 'react';
export const CharacterCardSkeleton = () => {
  return (
    <Box
      width={['80vw', '70vw', '300px', '280px']}
      height={['115vw', '100vw', '500px', '460px']}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '16px',
        border: '3px solid #997A3E',
        backgroundColor: 'transparent',
        p: '6px',
      }}
    >
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        sx={{
          borderRadius: '8px',
        }}
      />
    </Box>
  );
};
