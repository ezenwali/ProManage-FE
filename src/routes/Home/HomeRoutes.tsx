import { Navigate, Route, Routes } from 'react-router-dom';
import { FullCenterPageLoader } from '../../components/atoms/FullCenterPageLoader/FullCenterPageLoader';
import { useAuthState } from '../hooks/useAuthState';
import { HomePageContainer, BurgerMenu, HomePageLeftConatiner, HomePageRightConatiner } from './HomeRoute.style';
import { Path } from '../path';
import { ProjectDetailsPage, ProjectPage } from '../../components/pages';
import { NavMenu } from '../../components/molecules/NavMenu/NavMenu';
import { MenuIcon } from '../../assets/icons/menu';
import { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

export const HomeRoutes = () => {
  const { isCheckingAuth, user } = useAuthState();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  if (isCheckingAuth) {
    return <FullCenterPageLoader />;
  }

  if (!user) {
    return <Navigate to="/auth" />;
  }

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  return (
    <>
      <>
        <BurgerMenu>
          <MenuIcon onClick={toggleDrawer(true)} />
        </BurgerMenu>
        <SwipeableDrawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)} style={{border:"none"}}>
          <NavMenu />
        </SwipeableDrawer>
      </>
      <HomePageContainer>
        <HomePageLeftConatiner>
          <NavMenu />
        </HomePageLeftConatiner>

        <HomePageRightConatiner>
          <Routes>
            <Route path="/" element={<div>{user.email}</div>} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
            <Route path="/settings" element={<div>Profile settings</div>} />
            <Route path="*" element={<Navigate to={`/${Path.home}`} />} />
          </Routes>
        </HomePageRightConatiner>
      </HomePageContainer>
    </>
  );
};
