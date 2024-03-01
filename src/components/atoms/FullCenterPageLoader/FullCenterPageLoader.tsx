import { CircularProgress } from '@mui/material';
import { StyledLoader } from './FullCenterPageLoader.styles';

export const FullCenterPageLoader = () => {
  return (
    <StyledLoader>
      <CircularProgress />
    </StyledLoader>
  );
};
