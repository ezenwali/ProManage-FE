import { Typography } from '@mui/material';
import { NavLinkCon } from './Navlink.style';
import { COLORS } from '../../../theme/colors';

type navLinkProps = {
  to: string;
  label: string;
  Icon: JSX.Element;
  end?: boolean;
};

export const NavLink = ({ to, label, Icon, end = true }: navLinkProps) => {
  return (
    <NavLinkCon
      end={end}
      to={to}
      style={({ isActive }) => {
        return {
          backgroundColor: isActive ? COLORS.MildBlue_RGB : COLORS.Transparent
        };
      }}>
      {Icon}
      <Typography variant="body1">{label}</Typography>
    </NavLinkCon>
  );
};
