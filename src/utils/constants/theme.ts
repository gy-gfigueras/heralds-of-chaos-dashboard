import { createTheme } from '@mui/material';
import { ETheme } from './theme.enum';
export const createAppTheme = (mode: 'light' | 'dark') => {
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#8C54FF',
      },
      secondary: {
        main: '#FF0000',
      },
      background: {
        default: mode === ETheme.DARK ? '#0D0D0D' : '#FFFFFF',
        paper: mode === ETheme.DARK ? '#141414' : '#faf1e1',
      },
      text: {
        primary: mode === ETheme.DARK ? '#ffffff' : '#000000',
      },
      info: {
        main: mode === ETheme.DARK ? '#8C54FF' : '#8C54FF',
      },
    },
    components: {
      MuiTextField: {
        defaultProps: {
          variant: 'filled',
          slotProps: {
            input: {
              disableUnderline: true,
            },
          },
        },
      },
    },
  });
};
