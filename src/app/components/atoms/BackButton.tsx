import React from "react"
import { Box } from "@mui/material"
import Link from "next/link"
import { elMessiri } from "@/utils/fonts/fonts"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface BackButtonProps {
    path: string
}

export default function BackButton({ path }: BackButtonProps) {
    return (
        <Box display={['none', 'none', 'flex']}>
            <Link
                style={{
                    position: 'absolute',
                    top: '90px',
                    left: '15px',
                    zIndex: 2,
                    display: 'flex',
                    gap: '-1rem',
                    fontFamily: elMessiri.style.fontFamily,
                    fontWeight: 'bold',
                    color: '#997A3E',
                    textDecoration: 'none',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                href={path}
            >
                <ArrowBackIosNewIcon
                    sx={{
                        color: '#997A3E',
                        fontSize: '20px',
                        marginRight: '10px',
                        marginBottom: '2px',

                    }}
                />
                BACK
            </Link>
        </Box>
    )
}
