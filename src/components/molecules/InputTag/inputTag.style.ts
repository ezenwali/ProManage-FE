import { styled } from '@mui/material';
import { COLORS } from '../../../theme/colors';

const shouldForwardProp = (prop: string) => prop !== 'error' && prop !== 'isFocused';
const PREFIX = 'InputTagCon';

export const classes = {
  tagsContainer: `${PREFIX}-tagsContainer`,
  inputCon: `${PREFIX}-inputCon`
};

export const TagCon = styled('div', { shouldForwardProp })(() => ({
  [`& h5`]: {
    fontSize: '0.75rem !important',
    fontWeight: '400',
    color: COLORS.MainRed
  },
  [`& h4`]: {
    fontSize: '1rem',
    fontWeight: '500'
  },
  [`& h6`]: {
    fontSize: '0.75rem !important',
    fontWeight: '400',
    color: COLORS.MainGreen
  }
}));
export const InputTagCon = styled('div', { shouldForwardProp })<{ error: boolean; isFocused: boolean }>(
  ({ error, isFocused }) => ({
    border: error
      ? `1px solid ${COLORS.MainRed}`
      : isFocused
      ? `1px solid ${COLORS.MainGreen}`
      : `1px solid ${COLORS.MainGray}`,
    color: COLORS.MainGray,
    width: '100%',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '500',
    letterSpacing: '0.02rem',
    minHeight: '2.5rem',
    display: 'flex',

    [`& .${classes.inputCon}`]: {
      position: 'relative',
      backgroundColor: 'transparent',
      flex: 1,
      minWidth: '450px'
    },

    [`& .${classes.tagsContainer}`]: {
      width: 'max-content',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px',
      padding: '0.4rem 0.5rem'
    },

    '& input': {
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      borderRadius: '8px',
      backgroundColor: 'transparent',
      border: 'none',
      padding: '0.4rem 0rem',
      fontSize: '1.1rem',
      fontWeight: '500',

      '&:focus': {
        outline: 'none'
      }
    }
  })
);
