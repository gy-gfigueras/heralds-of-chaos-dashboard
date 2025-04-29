/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { cinzel, cormorantGaramond, elMessiri } from '@/utils/fonts/fonts';
import { Box, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useWorld } from '@/hooks/useWorld';
import BackButton from '@/app/components/atoms/BackButton';
import { oscurecerColor } from '@/utils/functions/DarkColor';
import { mutate } from 'swr';
import { useItem } from '@/hooks/useItem';

export default function ItemPage() {
    const { item } = useParams();
    console.log(item)
    console.log(useParams())
    const { data: itemFetched, isLoading, isValidating, error: isErrorItem } = useItem(item as string);

    const [darkColor, setDarkColor] = useState<string>();

    useEffect(() => {
        mutate(undefined, false);
    }, [itemFetched]);

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
                height: '100vh'
            }}
        >
            <BackButton path={'/items'} />
            <Box sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                gap: '10px',
            }}>
                <Image
                    src={itemFetched?.image as string}
                    alt={itemFetched?.name as string}
                    width={1080}
                    height={1080}
                    style={{
                        width: '250px',
                        height: '250px',
                        objectPosition: 'center top',
                        objectFit: 'cover',
                        borderRadius: '32px',
                        border: '2px solid #DBAE5A',
                    }}
                />
                <Typography
                    variant="h4"
                    sx={{
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
                    {itemFetched?.name}
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
                    {itemFetched?.type}
                </Typography>
                <Typography
                    variant="h4"
                    sx={(theme) => ({
                        fontWeight: '100',
                        fontFamily: cormorantGaramond.style.fontFamily,
                        fontSize: ['20px', '22px', '24px'],
                        color: theme.palette.mode === 'dark' ? '#E1e1e1' : '#inherit',
                        width: ["80%", "80%", "80%", '1200px'],
                        textAlign: 'center',
                        marginTop: '20px',
                    })}
                >
                    {itemFetched?.description}
                </Typography>

            </Box>


        </Box >
    );
}
