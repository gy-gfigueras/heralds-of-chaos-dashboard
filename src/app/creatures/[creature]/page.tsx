'use client';
import { cinzel, cormorantGaramond } from '@/utils/fonts/fonts';
import { Box, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import BackButton from '@/app/components/atoms/BackButton';
import { useCreature } from '@/hooks/useCreature';

export default function CreaturePage() {
    const { creature } = useParams();

    const {
        data: creatureFetched,
        isLoading,
        isValidating,
    } = useCreature(creature?.toString());


    if (!creatureFetched || isLoading || isValidating) {
        return <div>No creature data found.</div>;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                paddingX: ["16px", "64px", '200px'],
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'start',
                width: '100%',
                paddingTop: '100px',
            }}
        >
            <BackButton path={'/creatures'} />
            <Box sx={{
                width: ['150px', '200px', '250px'], height: ['150px', '200px', '250px'],
            }}>
                <Image
                    src={creatureFetched!.image}
                    style={{
                        width: "100%",
                        objectPosition: 'center top',
                        objectFit: 'cover',
                        height: "100%",
                        borderRadius: '50%',
                        border: '2px solid #DBAE5A',
                    }}
                    alt={`${creatureFetched.identifier}-profile-image`}
                    width={1080}
                    height={1080}
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    paddingTop: '20px',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        mb: 2,
                        fontWeight: 'bold',
                        fontFamily: cinzel.style.fontFamily,
                        fontSize: ['56px', '64px', '96px'],
                        background:
                            'linear-gradient(0deg, #594929 19%, #DBAE5A 51%, #594929 81%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    {creatureFetched!.name || 'No identifier available'}
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        marginTop: '-25px',
                        fontWeight: 'bold',
                        fontFamily: cinzel.style.fontFamily,
                        fontSize: ['22px', '30px', '36px'],
                        color: '#594929',
                    }}
                >
                    {creatureFetched!.race || 'No identifier available'}
                </Typography>
                <Box
                    sx={{
                        width: '20%',
                        height: '3px',
                        marginY: ['15px', '25px', '40px'],
                        backgroundColor: '#594929',
                    }}
                />

                <Typography
                    variant="h4"
                    sx={(theme) => ({
                        fontWeight: '100',
                        fontFamily: cormorantGaramond.style.fontFamily,
                        fontSize: ['20px', '22px', '24px'],
                        color: theme.palette.mode === 'dark' ? '#E1e1e1' : '#inherit',
                        width: ["80%", "80%", "80%", '1200px'],
                        textAlign: 'center',
                    })}
                >
                    {creatureFetched!.description || 'No identifier available'}
                </Typography>

            </Box>
        </Box>
    );
}
