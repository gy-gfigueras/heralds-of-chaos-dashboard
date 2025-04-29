'use client';
import { useCharacter } from '@/hooks/useCharacter';
import { cinzel, cormorantGaramond } from '@/utils/fonts/fonts';
import { Box, Typography } from '@mui/material';
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import { useWorld } from '@/hooks/useWorld';
import BackButton from '@/app/components/atoms/BackButton';
import { CharacterPageSkeleton } from '@/app/components/organisms/skeletons/CharacterPageSkeleton';

export default function CharacterPage() {
    const { character } = useParams();
    const searchParams = useSearchParams();
    const world = searchParams.get('world');

    const {
        data: characterFetched,
        isLoading,
        error,
    } = useCharacter(character?.toString());
    const {
        data: worldFetched,
        isLoading: isLoadingWorld,
        error: isErrorWorld,
    } = useWorld(world as string);

    if (isLoading || isLoadingWorld) {
        return <CharacterPageSkeleton />
    }

    if (error || isErrorWorld) {
        return <div>Error loading character data.</div>;
    }

    if (!characterFetched || !worldFetched) {
        return <div>No character data found.</div>;
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
            <BackButton path={'/characters'} />
            <Box sx={{
                width: ['150px', '200px', '250px'], height: ['150px', '200px', '250px'],
            }}>
                <Image
                    src={characterFetched!.image}
                    style={{
                        width: "100%",
                        objectPosition: 'center top',
                        objectFit: 'cover',
                        height: "100%",
                        borderRadius: '50%',
                        border: '2px solid #DBAE5A',
                    }}
                    alt={`${characterFetched.identifier}-profile-image`}
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
                    {characterFetched!.name || 'No identifier available'}
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
                    {characterFetched!.title || 'No identifier available'}
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
                        width: ["80%", '100%'],
                        textAlign: 'center',
                    })}
                >
                    {characterFetched!.description || 'No identifier available'}
                </Typography>
                <Box
                    sx={(theme) => ({
                        width: ['80%', '255px', '255px'],
                        marginTop: '20px',
                        height: ['250px', '250px', '309px'],
                        borderRadius: '8px',
                        backgroundColor:
                            theme.palette.mode === 'dark'
                                ? '#212121'
                                : theme.palette.background.paper,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        border: `2px solid ${worldFetched.mainColor}`,
                    })}
                >
                    <Image
                        src={worldFetched!.detailedIcon}
                        style={{ width: '115px', height: '115px' }}
                        alt={`${characterFetched.identifier}-profile-image`}
                        width={1080}
                        height={1080}
                    />
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            paddingTop: '20px',
                            fontFamily: cinzel.style.fontFamily,
                            fontSize: '20px',
                            color: worldFetched.mainColor,
                            width: '100%',
                            textAlign: 'center',
                        }}
                    >
                        {worldFetched!.name}
                    </Typography>
                    <Box
                        sx={{ width: '70%', height: '1px', backgroundColor: '#FFFFFF09' }}
                    />
                    <Typography
                        variant="h4"
                        sx={(theme) => ({
                            fontWeight: 'bold',
                            paddingTop: '20px',
                            fontFamily: cinzel.style.fontFamily,
                            fontSize: '20px',
                            color: theme.palette.mode === 'dark' ? '#E1e1e1' : '#inherit',
                            width: '100%',
                            textAlign: 'center',
                            marginTop: '-15px',
                        })}
                    >
                        {characterFetched!.race}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
