import { World } from "@/domain/world"
import { Box } from "@mui/material"
import React from "react"

interface WorldFilterProps {
    world: World
    worldSelected: World | null
    handleWorldSelected: (world: World) => void
}

export default function WorldFilter({ world, worldSelected, handleWorldSelected }: WorldFilterProps) {
    return (
        <Box
            key={world.identifier}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '75px',
                height: '75px',
            }}
        >
            <Box
                onClick={() => handleWorldSelected(world)}
                sx={{
                    transition: 'transform 0.3s ease',
                }}
            >
                <Box
                    component={'img'}
                    src={world.detailedIcon}
                    alt={world.name}
                    sx={{
                        width: '75px',
                        height: '75px',
                        borderRadius: '50%',
                        filter:
                            worldSelected?.identifier === world.identifier
                                ? 'none'
                                : 'grayscale(100%)',
                        transform:
                            worldSelected?.identifier === world.identifier
                                ? 'translateY(-10px)'
                                : 'none',
                        transition: 'transform 0.3s ease',

                        '&:hover': {
                            cursor: 'pointer',
                            transform: 'translateY(-10px)',
                            filter: 'grayscale(0%)',
                        },
                    }}
                />
            </Box>
        </Box>
    )
}