import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';

export const baseURL = import.meta.env.PROD ? import.meta.env.VITE_BASE_URL : 'http://localhost:8000';

export const api = axios.create({
  baseURL: baseURL,
  withCredentials: true
});

/**
 *
 * @param navigate react-router navigation
 *
 */
export const setupAxiosInterceptors = (navigate: NavigateFunction) => {
  api.interceptors.response.use(
    res => res,
    error => {
      if (error.response && error.response.status === 401) {
        document.cookie = `user_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        navigate('/auth');
      }
      return Promise.reject(error);
    }
  );
};
