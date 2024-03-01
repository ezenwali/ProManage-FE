import { styled } from '@mui/material';
import { NavLink as Link } from 'react-router-dom';
import { COLORS } from '../../../theme/colors';

export const NavLinkCon = styled(Link)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.text.primary,
  padding: '0.5rem 0',
  paddingLeft: '2rem',
  cursor: 'pointer',

  [`& p`]: {
    fontWeight: '500',
    fontSize: '1rem',
    marginLeft: '1rem'
  },

  [`&:hover`]: {
    backgroundColor: `${COLORS.MildBlue_RGB} !important`
  }
}));
