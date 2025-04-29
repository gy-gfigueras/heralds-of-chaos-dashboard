import { Box, TextField } from '@mui/material';
import React from 'react';

interface ItemsFilterProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ItemsFilter({ handleChange }: ItemsFilterProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '75px',
                gap: '20px',
            }}
        >
            <TextField
                id="outlined-basic"
                label="Buscar item"
                variant="outlined"
                onChange={handleChange}
                sx={{
                    width: '100%',
                    maxWidth: '400px',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#997A3E',
                        },
                        '&:hover fieldset': {
                            borderColor: '#DBAE5A',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#DBAE5A',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#997A3E',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#DBAE5A',
                    },
                }}
            />
        </Box>
    );
} 