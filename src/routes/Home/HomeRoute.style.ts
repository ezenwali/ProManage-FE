import { styled } from '@mui/material';

const PREFIX = 'HomeRoute';

export const classes = {
  logo: `${PREFIX}-logo`
};

export const HomePageContainer = styled('div')(() => ({
  width: '100vw',
  position: 'relative',
  display: 'flex',
  overflow: 'hidden'
}));

export const HomePageLeftConatiner = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  height: '100vh',
  zIndex: 2,
  boxShadow: '7px -1px 15px rgba(0, 0, 0, 0.05)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

export const HomePageRightConatiner = styled('div')(({ theme }) => ({
  flex: 1,
  height: '100vh',
  overflow: 'auto',
  padding: '2rem',

  [theme.breakpoints.down('md')]: {
    padding: '0 2rem',
    height: 'calc(100vh - 50px)'
  }
}));

export const BurgerMenu = styled('div')(({ theme }) => ({
  display: 'none',
  height: '50px',
  padding: '0 2rem',

  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center'
  }
}));
