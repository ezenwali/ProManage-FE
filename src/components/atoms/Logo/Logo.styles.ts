import styled from 'styled-components';
const PREFIX = 'Logo';

export const classes = {
  root: `${PREFIX}-root`
};

export const StyledLogo = styled('div')(() => ({
  [`&.${classes.root}`]: {
    width: 'max-content',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));
