'use client'

import { type RequestError, type RequestResult } from '@fsd/shared'
import {
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import { AdvantagesApi, IAdvantage } from '../../../api'
import { ADVANTAGES_QUERY_KEY } from './constants'
import { UseGetAdvantagesOptions } from './types'

export const getAdvantagesQueryKey = (): QueryKey => [ADVANTAGES_QUERY_KEY]

const getAdvantagesRequest = async () => {
  const data = await AdvantagesApi.get()

  return data
}

export const useGetAdvantagesQuery = <T = RequestResult<IAdvantage>>(
  options?: UseGetAdvantagesOptions,
  config?: Partial<UseQueryOptions<RequestResult<IAdvantage>, RequestError, T>>,
): UseQueryResult<T, RequestError> =>
  useQuery({
    queryFn: () => getAdvantagesRequest(),
    queryKey: getAdvantagesQueryKey(),
    ...(config || {}),
  })
