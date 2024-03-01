import { styled } from '@mui/material';
import { right_authRoute_image } from '../../assets';

const PREFIX = 'AuthRoute';

export const classes = {
  root: `${PREFIX}-root`,
  auth_logo: `${PREFIX}-auth_logo`,
  left: `${PREFIX}-left`,
  left_inner: `${PREFIX}-left_inner`,
  right: `${PREFIX}-right`,
  navigateCon: `${PREFIX}-navigateCon`
};

export const AuthRouteStyled = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    width: '100%',
    height: '100vh',
    display: 'flex',

    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      flexDirection: 'column',
      overflow: 'scroll',
      height: 'max-content'
    }
  },

  [`& .${classes.auth_logo}`]: {
    position: 'absolute',
    top: '2rem'
  },

  [`& .${classes.left}`]: {
    flex: '1',
    position: 'relative',
    padding: '0 2rem',
    overflow: 'scroll',
    'scrollbar-width': 'none',

    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      order: '2'
    }
  },

  [`& .${classes.left}::-webkit-scrollbar`]: {
    display: 'none'
  },

  [`& .${classes.left_inner}`]: {
    width: '100%',
    maxWidth: '450px',
    margin: '0 auto',
    paddingTop: '5rem',
    paddingBottom: '2rem'
  },

  [`& .${classes.navigateCon}`]: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  [`& .${classes.navigateCon} h6`]: {
    fontWeight: '400',
    fontSize: '0.975rem'
  },

  [`& .${classes.left_inner} h2`]: {
    fontWeight: '600',
    fontSize: '2rem'
  },

  [`& .${classes.left_inner} h5`]: {
    fontWeight: '400',
    fontSize: '1rem',
    marginTop: '0.3rem'
  },

  [`& .${classes.right}`]: {
    width: '40%',
    maxWidth: '800px',
    backgroundImage: `url(${right_authRoute_image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderTopLeftRadius: '45px',
    borderBottomLeftRadius: '45px',

    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      width: '100%',
      height: '20vh',
      borderRadius: '0',
      borderBottomRightRadius: '30px',
      borderBottomLeftRadius: '30px',
      maxWidth: 'none',
      order: '1'
    }
  }
}));
