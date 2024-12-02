'use client'

import {
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import { MainSliderItemApi, IMainSliderItem } from '../../../api'
import { MAIN_SLIDER_ITEMS_QUERY_KEY } from './constants'
import { RequestError, type RequestResult } from '@fsd/shared'

export const getMainSliderItemsQueryKey = (): QueryKey => [
  MAIN_SLIDER_ITEMS_QUERY_KEY,
]

const getMainSliderItemsRequest = async () => {
  const data = await MainSliderItemApi.getAll()

  return data
}

export const useGetMainSliderItemsQuery = <
  T = Required<RequestResult<IMainSliderItem>>,
>(
  config?: Partial<
    UseQueryOptions<Required<RequestResult<IMainSliderItem>>, RequestError, T>
  >,
): UseQueryResult<T, RequestError> =>
  useQuery({
    queryKey: getMainSliderItemsQueryKey(),
    queryFn: () => getMainSliderItemsRequest(),
    ...(config || {}),
  })
