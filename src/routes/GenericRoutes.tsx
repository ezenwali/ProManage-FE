import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from './Auth/AuthRoutes';

export const GenericRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthRoutes />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};
