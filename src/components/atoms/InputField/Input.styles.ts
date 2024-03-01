import { styled } from '@mui/system';
import { COLORS } from '../../../theme/colors';
const PREFIX = 'StyledInputCon';

export const classes = {
  label: `${PREFIX}-root`,
  text_layout: `${PREFIX}-text_layout`,
  inputCon: `${PREFIX}-inputCon`
};

export const StyledInputCon = styled('div')(() => ({
  [`& .${classes.label}`]: {
    fontSize: '1rem',
    fontWeight: '500'
  },

  [`& h6`]: {
    fontSize: '0.725rem',
    fontWeight: '500',
    color: COLORS.MildBlue
  },

  [`& h5`]: {
    fontSize: '0.75rem !important',
    fontWeight: '400',
    color: COLORS.MainRed
  },

  [`& .${classes.text_layout}`]: {
    marginBottom: '0.15rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  [`& .${classes.inputCon}`]: {
    display: 'flex',
    position: 'relative'
  },

  [`& .${classes.inputCon} div`]: {
    display: 'flex',
    position: 'absolute',
    padding: '5px',
    top: 0,
    right: 0
  }
}));

export const StyledInput = styled('input', {
  shouldForwardProp: prop => prop !== 'error'
})<{ error?: boolean }>(({ error }) => ({
  border: error ? `1px solid ${COLORS.MainRed}` : `1px solid ${COLORS.MainGray}`,
  color: COLORS.MainGray,
  width: '100%',
  borderRadius: '8px',
  padding: '0 1rem',
  fontSize: '1.1rem',
  fontWeight: '500',
  letterSpacing: '0.02rem',
  height: '2.5rem',

  '&:focus': {
    borderColor: error ? COLORS.MainRed : COLORS.MainGreen
  },

  ' &:focus-visible': {
    outline: 0
  }
}));
