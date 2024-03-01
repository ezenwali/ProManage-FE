import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { themeLight } from './theme/theme.ts';
import CssBaseline from '@mui/material/CssBaseline';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from 'react-query/devtools';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const theme = responsiveFontSizes(themeLight);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <Router>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <App />
            <Toaster />
            <CssBaseline />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ThemeProvider>
      </RecoilRoot>
    </Router>
  </React.StrictMode>
);
