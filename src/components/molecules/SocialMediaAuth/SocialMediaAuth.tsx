import { Button as ButtonMUI, Typography } from '@mui/material';
import { GoogleIcon } from '../../../assets/icons/google';
import { StyledSocialMediaAuth, classes } from './SocialMediaAuth.style';
import { Spacer } from '../../atoms';
import { baseURL } from '../../../common/services/axios.service';

interface IsocialMediaAuth {
  type: 'Login' | 'Register';
}

export const SocialMediaAuth: React.FC<IsocialMediaAuth> = ({ type }) => {
  const handleSocialMediaSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, type: 'apple' | 'google') => {
    e.preventDefault();

    if (type === 'google') {
      try {
        window.open(`${baseURL}/auth/google/login`, '_self');
      } catch (ex) {
        console.log(ex);
      }
    }
  };

  return (
    <StyledSocialMediaAuth>
      <div className={classes.divder_con}>
        <div />
        <Typography variant="h6">or</Typography>
        <div />
      </div>
      <Spacer height={30} />
      <div className={classes.social_con}>
        <ButtonMUI startIcon={<GoogleIcon />} variant="outlined" onClick={e => handleSocialMediaSignUp(e, 'google')}>
          {type === 'Login' ? 'Sign In' : 'Sign Up'} with Google
        </ButtonMUI>
        {/* <Spacer height={15} width={15} />
        <ButtonMUI startIcon={<AppleIcon />} variant="outlined" onClick={() => cb('apple')}>
          Sign in with Apple
        </ButtonMUI> */}
      </div>
    </StyledSocialMediaAuth>
  );
};
