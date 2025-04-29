'use client';
import { Box } from '@mui/material';
import React from 'react';
import { useWorlds } from '@/hooks/useWorlds';
import BackButton from '../components/atoms/BackButton';
import { WorldCard } from '../components/atoms/WorldCard';


export default function WorldsPage() {
    const { data, isLoading } = useWorlds();


    if (isLoading) {
        return (
            "Loading"
        );
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'start',
                height: '100vh',
                flexWrap: 'wrap',
                width: '100vw',
                paddingTop: ["16px", "64px",],
                gap: '1.5rem',
            }}
        >
            <BackButton path={'/'} />


            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    overflowY: 'auto',
                    width: '90%',
                    height: '100%',
                    scrollbarColor: `#997A3E transparent`,
                    borderRadius: '30px',
                    zIndex: 2,
                    padding: '20px',
                    marginTop: '50px',
                }}
            >
                {data ? (
                    data!.map((world) => (
                        <WorldCard
                            key={world.identifier}
                            id={world.identifier}
                            name={world.name}
                            image={world.image}
                            color={world.mainColor}
                        />
                    ))
                ) : (
                    <h1>Loading...</h1>
                )}
            </Box>

        </Box>
    );
}
