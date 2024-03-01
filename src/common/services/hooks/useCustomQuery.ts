import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { logger } from '../../helpers/logging.helper';
import { api } from '../axios.service';
import { QueryOptions, ResponseContent, axiosError } from '../interface';

/**
 * Built on usequery (Get) and api (Axios with Base url of the backend)
 */
export const useCustomQuery = <TData>({ url, queryKey, ...options }: QueryOptions<TData, axiosError>) => {
  const fetchData = <_TData>() => api.get<ResponseContent<_TData>>(url).then(res => res.data);

  return useQuery<TData, AxiosError<axiosError>>({
    queryKey,
    queryFn: fetchData,
    onError: err => {
      const error = err.response?.data;
      logger.logError({ name: url, message: error?.message, showToast: error?.statusCode === 401 ? false : true });
    },
    ...options
  });
};
