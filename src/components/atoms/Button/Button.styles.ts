import { Button, styled } from '@mui/material';
import { COLORS } from '../../../theme/colors';
const PREFIX = 'Button';

export const classes = {
  root: `${PREFIX}-root`
};

export const StyledButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'isLoading'
})<{ isLoading?: boolean }>(({ isLoading }) => ({
  [`&.${classes.root}`]: {
    backgroundColor: COLORS.MainGreen,
    color: COLORS.White,
    fontWeight: '600',
    borderRadius: '11px',
    padding: '0.5rem 1rem',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: COLORS.MainGreen,
      filter: 'brightness(1.2)'
    }
  },

  ...(isLoading && {
    animation: 'loading 1.3s ease-in-out infinite'
  }),

  '@keyframes loading': {
    '0%': {
      filter: 'brightness(1.2)'
    },
    '50%': {
      filter: 'brightness(0.8)'
    },
    '100%': {
      filter: 'brightness(1.2)'
    }
  }
}));
