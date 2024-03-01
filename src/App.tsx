import { useNavigate } from 'react-router-dom';
import { logger } from './common/helpers/logging.helper';
import { MainRoutes } from './routes/Routes';
import { setupAxiosInterceptors } from './common/services/axios.service';

function App() {
  const navigate = useNavigate();
  setupAxiosInterceptors(navigate);

  logger.logInfo({ name: 'app re-rendered', excludeCallStack: true });

  return (
    <>
      <MainRoutes />
    </>
  );
}

export default App;
