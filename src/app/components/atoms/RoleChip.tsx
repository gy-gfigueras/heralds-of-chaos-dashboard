import { ERole } from '@/utils/constants/roles.enum';
import { Chip } from '@mui/material';
import React from 'react';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import RoleTheme from '@/utils/functions/RoleTheme';
import { cinzel } from '@/utils/fonts/fonts';

interface RoleChipProps {
  role: ERole;
}

export function RoleChip({ role }: RoleChipProps) {
  return (
    <Chip
      icon={<Brightness1Icon />}
      label={role}
      color="primary"
      variant="outlined"
      size="small"
      sx={{
        border: '2px solid',
        paddingX: '5px',
        paddingY: '4px',
        displat: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '5px',
        fontWeight: 700,
        fontFamily: cinzel.style.fontFamily,
        ...RoleTheme(role),
      }}
    />
  );
}
