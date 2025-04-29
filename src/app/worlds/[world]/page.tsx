/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { cormorantGaramond, elMessiri } from '@/utils/fonts/fonts';
import { Box, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useWorld } from '@/hooks/useWorld';
import BackButton from '@/app/components/atoms/BackButton';
import { oscurecerColor } from '@/utils/functions/DarkColor';
import { mutate } from 'swr';

export default function CharacterPage() {
    const { world } = useParams();
    const { data: worldFetched, isLoading, isValidating, error: isErrorWorld } = useWorld(world as string);

    const [darkColor, setDarkColor] = useState<string>();

    console.log(worldFetched?.places)
    useEffect(() => {
        mutate(undefined, false);
    }, [world]);

    useEffect(() => {

        if (worldFetched) {
            const color = worldFetched.mainColor;
            const darkenedColor = oscurecerColor(color);
            setDarkColor(darkenedColor);
        }

    }, [worldFetched])


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
            <BackButton path={'/worlds'} />
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
                    src={worldFetched?.image as string}
                    alt={worldFetched?.name as string}
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
                <Image
                    src={worldFetched?.detailedIcon as string}
                    alt={worldFetched?.name as string}
                    width={1000}
                    height={1000}
                    style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        position: "absolute",
                        zIndex: -1,
                        bottom: '-50px'
                    }} />


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
                <Box sx={{
                    width: '150px', height: "2px", backgroundColor: worldFetched?.mainColor, boxShadow: '0px 0px 10px rgb(0, 0, 0)',
                }}></Box>
                <Typography
                    sx={{
                        fontFamily: elMessiri.style.fontFamily,
                        fontSize: ['24px', '32px'],
                        background:
                            `linear-gradient(0deg, ${darkColor} 19%, ${worldFetched?.mainColor} 51%, ${darkColor} 81%)`,
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
                    {worldFetched?.name}
                </Typography>
                <Box sx={{
                    width: '150px', height: "2px", backgroundColor: worldFetched?.mainColor, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
                }}></Box>
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
                {worldFetched!.description || 'No identifier available'}
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    /*    height: '230px', */
                    height: ['100%', '400px'],

                    marginTop: '20px',
                    gap: '20px',
                    overflowY: 'auto',
                    flexWrap: 'wrap',
                    scrollbarColor: `${worldFetched?.mainColor} transparent`,


                }}>
                {worldFetched?.places.map((place) => (
                    <Box
                        key={place.identifier}
                        sx={(theme) => ({
                            width: ['80%', '255px', '255px'],
                            marginTop: '20px',
                            height: ['100px', '100px', '100px'],
                            borderRadius: '8px',
                            // backgroundColor:
                            //     theme.palette.mode === 'dark'
                            //         ? '#212121'
                            //         : theme.palette.background.paper,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            border: `2px solid ${worldFetched.mainColor}`,
                            textAlign: 'center',
                            position: 'relative',

                        })}>
                        <Image src={place.image} alt={place.name} width={1920} height={1080}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                position: 'absolute',
                                zIndex: -1,
                                filter: 'brightness(0.5)',
                            }}
                        />
                        <Typography
                            sx={{
                                fontFamily: elMessiri.style.fontFamily,
                                fontSize: ['24px', '24px'],
                                background:
                                    `linear-gradient(0deg, ${darkColor} 19%, ${worldFetched?.mainColor} 51%, ${darkColor} 81%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                color: 'transparent',
                                fontWeight: 'bold',
                                textAlign: 'center',

                            }}
                        >
                            {place.name}
                        </Typography>
                    </Box>
                ))}
            </Box>


        </Box >
    );
}
