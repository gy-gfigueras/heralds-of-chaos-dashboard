'use client';
import { Box, Skeleton } from '@mui/material';
import React from 'react';
export const CharactersFilterSkeleton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '50px',
        gap: '10px',
      }}
    >
      <Skeleton variant="rectangular" width="35%" height="100%" />
    </Box>
  );
};
