'use client';
import { Box, Skeleton } from '@mui/material';
import React from 'react';
export const WorldsSkeleton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '75px',
        gap: '20px',
      }}
    >
      {[...Array(5)].map((_, index) => (
        <Skeleton
          key={index}
          variant="circular"
          width="75px"
          height="75px"
          sx={{
            borderRadius: '50%',
          }}
        />
      ))}
    </Box>
  );
};
