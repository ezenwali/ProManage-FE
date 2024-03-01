import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from './Auth/AuthRoutes';
import { Path } from './path';
import { HomeRoutes } from './Home/HomeRoutes';
import { GenericRoutes } from './GenericRoutes';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path={`${Path.auth}/*`} element={<AuthRoutes />} />
      <Route path={`${Path.home}/*`} element={<HomeRoutes />} />
      <Route path="/*" element={<GenericRoutes />} />
    </Routes>
  );
};
