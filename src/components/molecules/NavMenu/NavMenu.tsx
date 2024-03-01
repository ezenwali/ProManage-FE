import { Logo, Spacer } from '../../atoms';
import { LogOut } from '../../../assets/icons/logout';
import { Typography } from '@mui/material';
import { NavMenuCon, classes } from './NavMenu.style';
import { NavLink } from '../NavLink/NavLink';
import { Dashboard } from '../../../assets/icons/dashboard';
import { Project } from '../../../assets/icons/project';
import { Settings } from '../../../assets/icons/settings';
import { Path } from '../../../routes/path';

const navLinks = [
  { label: 'Dashboard', to: `/home`, Icon: <Dashboard /> },
  { label: 'Projects', to: Path.projects, Icon: <Project />, end: false },
  { label: 'Settings', to: Path.profileSettings, Icon: <Settings /> }
];

export const NavMenu = () => {
  return (
    <NavMenuCon>
      <div>
        <div className={classes.logo}>
          <Logo to={'/home'} />
        </div>
        <Spacer height={40} />
        <div>
          {navLinks.map((nav, i) => {
            const { label, to, Icon, end } = nav;
            return (
              <div key={i}>
                <NavLink label={label} to={to} Icon={Icon} end={end} />
                <Spacer height={20} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <a>
          <LogOut />
          <Typography variant="h6">Log out</Typography>
        </a>
      </div>
    </NavMenuCon>
  );
};
