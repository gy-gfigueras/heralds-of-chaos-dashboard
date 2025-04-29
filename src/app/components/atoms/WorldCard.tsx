'use client';
import { Box, Typography } from '@mui/material';
import { elMessiri } from '@/utils/fonts/fonts';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import { oscurecerColor } from '@/utils/functions/DarkColor';

interface WorldCardProps {
    id: string;
    name: string;
    image: string;
    color?: string
}

export const WorldCard = ({
    id,
    name,
    image,
    color
}: WorldCardProps) => {

    const darkColor = oscurecerColor(color ?? 'white', 0.5);
    const router = useRouter();
    const handleClick = (identifier: string) => {
        router.push(`/worlds/${identifier}`);
    };
    return (
        <Box
            onClick={() => handleClick(id)}
            key={id}
            width={['80vw', '70vw', '300px', '45%']}
            height={['115vw', '100vw', '500px', '300px']}
            sx={(theme) => ({
                display: 'flex',
                aspectRatio: 343 / 500,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '16px',
                border: `3px solid ${darkColor}`,
                backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
                p: '6px',
                transition:
                    'transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease',
                '&:hover': {
                    transform: 'translateY(16px)',
                    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.23)',
                    filter:
                        theme.palette.mode === 'dark'
                            ? 'brightness(1.2)'
                            : 'brightness(1.1)',
                },
                cursor: 'pointer',
            })}
        >
            <Box
                width="100%"
                height="100%"
                sx={{
                    position: 'relative',
                    borderRadius: '8px',
                    border: `3px solid ${color}`,
                    overflow: 'hidden',
                }}
            >
                {/* Imagen */}
                <Image
                    src={image}
                    alt={name}
                    width={1080}
                    height={1080}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        pointerEvents: 'none',
                    }}
                />

                {/* Sombra interior desde abajo */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background:
                            'linear-gradient(to top, rgb(0, 0, 0), transparent 80%)',
                        pointerEvents: 'none',
                    }}
                />

                {/* Nombre del personaje */}
                <Typography
                    sx={{
                        fontFamily: elMessiri.style.fontFamily,
                        fontSize: ['24px', '32px'],
                        background:
                            `linear-gradient(0deg, ${darkColor} 19%, ${color} 51%, ${darkColor} 81%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent',
                        fontWeight: 'bold',
                        position: 'absolute',
                        bottom: '20px',
                        textAlign: 'center',
                        width: '100%',
                    }}
                >
                    {name}
                </Typography>
            </Box>
        </Box>
    );
};
