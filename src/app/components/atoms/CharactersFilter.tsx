import { elMessiri } from '@/utils/fonts/fonts';
import { TextField, InputAdornment } from '@mui/material';
import React from 'react';
import { World } from '@/domain/world';
import SearchIcon from '@mui/icons-material/Search';

interface CharactersFilterProps {
  worldSelected: World | null;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CharactersFilter({
  worldSelected,
  handleChange,
}: CharactersFilterProps) {
  return (
    <TextField
      label={worldSelected ? worldSelected.name : 'Search'}
      placeholder="Find..."
      onChange={handleChange}
      variant="outlined"
      sx={{
        mb: '8px',
        width: ['80%', '100%', '570px'],
        fontFamily: elMessiri.style.fontFamily,
        '& .MuiOutlinedInput-root': {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#DBAE5A',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#997A3E',
          },
          '&.MuiFormLabel-root': {
            color: '#DBAE5A',
          },
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#997A3E',
        },
        '& .MuiInputBase-input': {
          color: '#997A3E',
          fontFamily: elMessiri.style.fontFamily,
        },
        '& .MuiInputLabel-root': {
          color: '#997A3E',
          fontFamily: elMessiri.style.fontFamily,
          fontSize: '17px',
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: '#DBAE5A',
          fontFamily: elMessiri.style.fontFamily,
          fontSize: '17px',
        },
      }}
      slotProps={{
        htmlInput: {
          style: {
            fontFamily: elMessiri.style.fontFamily,
            width: '100%',
            color: '#997A3E',
            fieldSet: {
              borderColor: '#997A3E',
            },
          },
        },
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                sx={{
                  color: '#997A3E',
                }}
              />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
