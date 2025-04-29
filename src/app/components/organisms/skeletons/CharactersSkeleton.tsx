import { Box } from "@mui/material";
import React from "react";
import { CharacterCardSkeleton } from "../../atoms/skeletons/CharacterCardSkeleton";
import { CharactersFilterSkeleton } from "../../atoms/skeletons/CharactersFilterSkeleton";
import { WorldsSkeleton } from "../../atoms/skeletons/WorldsSkeleton";
export default function CharactersSkeleton() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'start',
                height: '100vh',
                width: '100vw',
                paddingTop: '100px',
                gap: '2rem',
            }}
        >
            <CharactersFilterSkeleton />
            <WorldsSkeleton />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    width: '90%',
                    height: '70%',
                }}
            >
                {[...Array(6)].map((_, index) => (
                    <CharacterCardSkeleton key={index} />
                ))}
            </Box>
        </Box>
    )
}