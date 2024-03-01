import { AxiosError } from 'axios';
import { UseMutationOptions, UseQueryOptions } from 'react-query';
import { MutationKey } from '../interface/mutationKey.types';
import { QueryKey as qkey } from '../interface/queryKeys.type';

export interface MutationOptions<TData, TReqBody, TError>
  extends Omit<UseMutationOptions<TData, AxiosError<TError>, TReqBody>, 'onSuccess' | 'mutationFn' | 'mutationKey'> {
  mutationKey: MutationKey;
  url: string;
  onOkay?: (data: TData) => void;
  refetchKeys?: qkey[];
}

export interface QueryOptions<TData, TError>
  extends Omit<UseQueryOptions<TData, AxiosError<TError>>, 'queryKey' | 'queryFn' | 'onError'> {
  queryKey: qkey;
  url: string;
}

export type ResponseContent<T = Record<string, unknown>> = T;
export type axiosError = { message: string; statusCode: number };
