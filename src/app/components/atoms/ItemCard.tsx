'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';


interface ItemCardProps {
    id: string;
    name: string;
    image: string;
    description: string;
    type: string;
}

export const ItemCard = ({
    id,
    name,
    image,
    /* description,
    type, */
}: ItemCardProps) => {

    const router = useRouter();
    const handleClick = (identifier: string) => {
        router.push(`/items/${identifier}`);
    };
    return (
        <Box
            onClick={() => handleClick(id)}
            key={id}
            width={['80vw', '70vw', '200px']}
            height={['200px']}
            sx={(theme) => ({
                display: 'flex',
                aspectRatio: 343 / 500,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '16px',
                border: '3px solid #997A3E',
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
                    border: '3px solid #DBAE5A',
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


                {/* Nombre del personaje */}
                {/* <Typography
                    sx={{
                        fontFamily: elMessiri.style.fontFamily,
                        fontSize: ['24px'],
                        background:
                            'linear-gradient(0deg, #594929 19%, #DBAE5A 51%, #594929 81%)',
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
                </Typography> */}
            </Box>
        </Box>
    );
};
