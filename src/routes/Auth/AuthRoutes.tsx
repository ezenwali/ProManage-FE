import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Logo, Spacer } from '../../components/atoms';
import { AuthRouteStyled, classes } from './AuthRoute.styles';
import { LoginPage, RegisterPage } from '../../components/pages';
import { Path } from '../path';
import { Typography } from '@mui/material';
import { useAuthState } from '../hooks/useAuthState';
import { FullCenterPageLoader } from '../../components/atoms/FullCenterPageLoader/FullCenterPageLoader';

enum RouteName {
  Register = 'register',
  Login = 'login'
}

const navigteOptions = {
  register: {
    question: 'Have an account?',
    linkName: 'Sign In',
    path: '/auth/login'
  },
  login: {
    question: 'Don’t have an account?',
    linkName: 'Sign Up',
    path: '/auth/register'
  }
};

const infoPanes = {
  register: {
    title: 'Get Started Now',
    description: 'Organize your team task with Pro-Manage'
  },
  login: {
    title: 'Welcome back!',
    description: 'Enter your Credentials to access your account'
  }
};

const getRouteName = (routePath: string): RouteName =>
  routePath.indexOf('register') !== -1 ? RouteName.Register : RouteName.Login;

export const AuthRoutes = () => {
  const { isCheckingAuth, user } = useAuthState();

  const location = useLocation();

  const routeName = getRouteName(location.pathname);
  const info = infoPanes[routeName];
  const navigteOption = navigteOptions[routeName];

  if (isCheckingAuth) {
    return <FullCenterPageLoader />;
  }

  if (user) {
    return <Navigate to="/home" />;
  }

  return (
    <AuthRouteStyled className={classes.root}>
      <div className={classes.left}>
        <div className={classes.left_inner}>
          <Typography variant="h2">{info.title}</Typography>
          <Typography variant="h5">{info.description}</Typography>
          <Spacer height={30} />
          <Routes>
            <Route path={`${Path.login}/:loginFailed`} element={<LoginPage />} />
            <Route path={Path.register} element={<RegisterPage />} />
            <Route path={Path.any_route} element={<LoginPage />} />
          </Routes>
          <Spacer height={15} />
          <div className={classes.navigateCon}>
            <Typography variant="h6">
              {navigteOption.question} <Link to={navigteOption.path}>{navigteOption.linkName}</Link>
            </Typography>
          </div>
        </div>
        <div className={classes.auth_logo}>
          <Logo to={'/auth/login'} />
        </div>
      </div>
      <div className={classes.right} />
    </AuthRouteStyled>
  );
};
