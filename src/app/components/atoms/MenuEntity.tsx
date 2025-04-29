/* eslint-disable react/jsx-no-undef */
'use client';
import { elMessiri } from '@/utils/fonts/fonts';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

interface MenuEntityProps {
  text: string;
  image: string;
  link: string;
  delay?: number;
}

export function MenuEntity({
  text,
  image,
  link,
  delay,
}: MenuEntityProps): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <Link style={{ textDecoration: 'none' }} href={link}>
        <Box
          sx={(theme) => ({
            width: ['160px', "200px", '262px'],
            height: ['160px', "200px", '262px'],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '32px',
            background:
              theme.palette.mode === 'dark'
                ? 'linear-gradient(0deg, #594929 19%, #DBAE5A 51%, #594929 81%)'
                : 'linear-gradient(0deg,#c2a972 19%,#e6d1a9 51%, #c2a972  81%)',
            transition:
              'transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease',
            p: '6px',
            '&:hover': {
              transform: 'translateY(-16px)',
              boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.23)',
              filter:
                theme.palette.mode === 'dark'
                  ? 'brightness(1.2)'
                  : 'brightness(1.1)',
            },
          })}
        >
          <Box
            sx={(theme) => ({
              bgcolor: theme.palette.background.paper,
              width: '100%',
              height: '100%',
              borderRadius: '26px',
              px: '33px',
              py: '22px',
              gap: ['2px', '16px'],
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            })}
          >
            <Image
              style={{ width: '84px', height: '84px' }}
              src={image}
              alt={''}
              width={1080}
              height={1080}
            />

            <Typography
              sx={{
                fontFamily: elMessiri.style.fontFamily,
                fontSize: ['24px', '32px'],
                background:
                  'linear-gradient(0deg, #594929 19%, #DBAE5A 51%, #594929 81%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                fontWeight: 'bold',
              }}
            >
              {text}
            </Typography>
          </Box>
        </Box>
      </Link>
    </motion.div>
  );
}
