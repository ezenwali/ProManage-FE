import { styled } from '@mui/material';
import { COLORS } from '../../../theme/colors';

const PREFIX = 'SocialMediaAuth';
export const classes = {
  divder_con: `${PREFIX}-divder_con`,
  social_con: `${PREFIX}-social_con`
};

export const StyledSocialMediaAuth = styled('form')(({ theme }) => ({
  [`& .${classes.divder_con}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  [`& .${classes.divder_con} div`]: {
    width: '100%',
    height: '2px',
    backgroundColor: COLORS.MildGray
  },

  [`& .${classes.divder_con} h6`]: {
    fontSize: '1rem',
    fontWeight: '500',
    margin: '0 0.5rem'
  },

  [`& .${classes.social_con}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      flexDirection: 'column'
    }
  }
}));
