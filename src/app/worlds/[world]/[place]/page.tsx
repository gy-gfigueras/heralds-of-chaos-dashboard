/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { cormorantGaramond, elMessiri } from '@/utils/fonts/fonts';
import { Box, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import Image from 'next/image';
import BackButton from '@/app/components/atoms/BackButton';
import { mutate } from 'swr';
import { usePlace } from '@/hooks/usePlace';

export default function PlacePage() {
    const { place } = useParams();
    const { data: placeFetched, isLoading, isValidating, error: isErrorPlace } = usePlace(place as string);

    useEffect(() => {
        mutate(undefined, false);
    }, [place]);


    if (isLoading || isValidating) {
        return <div>Loading...</div>;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                paddingX: ["16px", "64px", '100px'],
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'start',
                width: '100%',
                height: '100vh',
                paddingTop: '100px',
            }}
        >
            <BackButton path={`/worlds}`} />
            <Box sx={{
                width: '100%',
                height: '300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}>
                <Image
                    src={placeFetched?.image as string}
                    alt={placeFetched?.name as string}
                    width={1000}
                    height={1000}
                    style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        position: "absolute",
                        zIndex: -1,
                    }}
                />

            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                marginTop: '75px',
                gap: '20px',
                textAlign: 'center',
            }}>
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
                        filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))',

                        textAlign: 'center',
                        zIndex: 1,
                    }}
                >
                    {placeFetched?.name}
                </Typography>
            </Box>
            <Typography
                variant="h4"
                sx={(theme) => ({
                    fontWeight: '100',
                    fontFamily: cormorantGaramond.style.fontFamily,
                    fontSize: ['20px', '22px', '24px'],
                    color: theme.palette.mode === 'dark' ? '#E1e1e1' : '#inherit',
                    width: ["80%", '100%'],
                    textAlign: 'center',
                })}
            >
                {placeFetched?.description || 'No identifier available'}
            </Typography>

        </Box >
    );
}
