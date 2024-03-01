import { createTheme } from '@mui/material/styles';
import { COLORS } from './colors';

export const breakpoints = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 };

export const maxWidth = 1280;

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    sendCode: true;
  }
}

export const themeLight = createTheme({
  breakpoints: {
    values: breakpoints
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
    h1: { fontSize: 30, fontWeight: 400 },
    h2: { fontSize: 26 },
    h3: { fontSize: 24 },
    h4: { fontSize: 20 },
    body1: { fontSize: 16 },
    body2: { fontSize: 14 }
  },
  palette: {
    primary: {
      main: COLORS.MainBlue,
      contrastText: COLORS.MainBlack
    },
    secondary: {
      main: COLORS.MainBlue,
      contrastText: COLORS.MildBlue
    },
    text: {
      primary: COLORS.MainBlack,
      secondary: COLORS.MainGray
    },
    background: {
      paper: COLORS.White,
      default: COLORS.White
    }
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            opacity: 0.5,
            color: COLORS.White
          }
        }
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: `2px solid ${COLORS.MildGray}`,
            color: COLORS.MainBlack,
            width: '100%',
            fontWeight: '600',
            borderRadius: '11px',
            padding: '0.5rem',
            textTransform: 'capitalize',

            '&:hover': {
              border: `2px solid ${COLORS.MainGreen}`,
              filter: 'brightness(1.2)'
            }
          }
        },
        {
          props: { variant: 'sendCode' },
          style: {
            height: '26px',
            width: '100%',
            fontWeight: '600',
            borderRadius: 6,
            textTransform: 'capitalize',
            backgroundColor: COLORS.MainGreen,
            fontSize: '10px',
            color: COLORS.White,

            '&:hover': {
              backgroundColor: COLORS.MainGreen,
              filter: 'brightness(1.2)'
            }
          }
        }
      ]
    }
  }
});
