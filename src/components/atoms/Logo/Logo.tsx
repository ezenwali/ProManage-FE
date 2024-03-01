import { useNavigate } from 'react-router-dom';
import { LogoIcon } from '../../../assets/icons/logo';
import { StyledLogo, classes } from './Logo.styles';

type logoProps = {
  to: string;
};

export const Logo = ({ to }: logoProps) => {
  const navigate = useNavigate();

  return (
    <StyledLogo onClick={() => navigate(to)} className={classes.root}>
      <LogoIcon />
    </StyledLogo>
  );
};
