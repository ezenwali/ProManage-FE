import styled from 'styled-components';

const PREFIX = 'NavMenuCon';

export const classes = {
  logo: `${PREFIX}-logo`
};

export const NavMenuCon = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxWidth: '250px !important',
  minWidth: '200px !important',
  padding: '2rem 0',

  [`& .${classes.logo}`]: {
    marginLeft: '2rem'
  },

  [`& a`]: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '2rem',
    cursor: 'pointer'
  },

  [`& a h6`]: {
    paddingLeft: '1rem',
    fontSize: '1.2rem'
  }
}));
