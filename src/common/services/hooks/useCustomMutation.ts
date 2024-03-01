import { AxiosError } from 'axios';
import { MutationOptions, ResponseContent, axiosError } from '../interface';
import { api } from '../axios.service';
import { useMutation, useQueryClient } from 'react-query';
import { logger } from '../../helpers/logging.helper';
import toast from 'react-hot-toast';

/**
 * Built on usequery (Put,Post,Patch) and api (Axios with Base url of the backend)
 */
export const useCustomMutation = <TData, TReqBody>({
  mutationKey,
  url,
  onOkay,
  refetchKeys,
  ...options
}: MutationOptions<TData, TReqBody, axiosError>) => {
  const queryClient = useQueryClient();

  const postData = <TData>(body: TReqBody) => api.post<ResponseContent<TData>>(url, body).then(res => res.data);

  return useMutation<TData & { message?: string }, AxiosError<axiosError>, TReqBody>({
    mutationKey,
    mutationFn: postData,
    onError: err => {
      const error = err.response?.data;
      logger.logError({ name: url, message: error?.message, showToast: error?.statusCode === 401 ? false : true });
    },
    onSuccess: async response => {
      onOkay && onOkay(response);
      response.message && toast.success(response.message);

      if (refetchKeys && refetchKeys.length > 0) {
        console.log(refetchKeys);

        queryClient.invalidateQueries(refetchKeys);
      }
    },

    ...options
  });
};
