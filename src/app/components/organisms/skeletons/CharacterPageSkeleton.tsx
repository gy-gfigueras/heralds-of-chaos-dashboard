'use client';

import { Box, Skeleton } from '@mui/material';
import React from 'react';
export const CharacterPageSkeleton = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                paddingX: ["16px", "64px", '200px'],
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'start',
                width: '100%',
                height: 'auto',
                paddingTop: '100px',
            }}
        >
            {/* Back Button Skeleton */}
            <Skeleton
                variant="rectangular"
                width="100px"
                height="40px"
                sx={{ alignSelf: 'start', marginBottom: '20px' }}
            />

            {/* Profile Image Skeleton */}
            <Box sx={{
                width: ['150px', '200px', '250px'], height: ['150px', '200px', '250px'],
            }}>
                <Skeleton
                    variant="circular"
                    sx={{
                        width: "100%",
                        objectPosition: 'center top',
                        objectFit: 'cover',
                        height: "100%",
                        borderRadius: '50%',
                        border: '2px solid #DBAE5A',
                    }}
                />
            </Box>

            {/* Name Skeleton */}
            <Skeleton
                variant="text"
                sx={{
                    width: { xs: '200px', sm: '300px', md: '400px' },
                    height: { xs: '56px', sm: '64px', md: '96px' },
                    marginTop: '20px',
                }}
            />

            {/* Title Skeleton */}
            <Skeleton
                variant="text"
                sx={{
                    width: { xs: '150px', sm: '200px', md: '250px' },
                    height: { xs: '22px', sm: '30px', md: '36px' },
                    marginTop: '-10px',
                }}
            />

            {/* Divider Skeleton */}
            <Skeleton
                variant="rectangular"
                width="20%"
                height="3px"
                sx={{
                    marginY: ['15px', '25px', '40px'],
                }}
            />

            {/* Description Skeleton */}
            <Skeleton
                variant="text"
                sx={{
                    textAlign: 'center',
                    width: ['80%', '90%', '100%'],
                    height: ['20px', '22px', '24px'],
                }}
            />

            {/* World Info Skeleton */}
            <Box
                sx={{
                    width: ['80%', '255px', '255px'],
                    marginTop: '20px',
                    height: ['250px', '250px', '309px'],
                    borderRadius: '8px',
                    backgroundColor: 'transparent',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    border: '2px solid #DBAE5A',
                }}
            >
                <Skeleton
                    variant="circular"
                    width="115px"
                    height="115px"
                    sx={{
                        borderRadius: '50%',
                    }}
                />
                <Skeleton
                    variant="text"
                    width="150px"
                    height="20px"
                    sx={{
                        marginTop: '10px',
                    }}
                />
                <Skeleton
                    variant="rectangular"
                    width="70%"
                    height="1px"
                    sx={{
                        backgroundColor: '#FFFFFF09',
                    }}
                />
                <Skeleton
                    variant="text"
                    width="150px"
                    height="20px"
                    sx={{
                        marginTop: '-10px',
                    }}
                />
            </Box>
        </Box>
    );
};