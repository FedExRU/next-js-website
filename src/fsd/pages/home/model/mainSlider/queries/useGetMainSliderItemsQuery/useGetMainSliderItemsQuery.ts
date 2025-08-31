'use client'

import { RequestError, type RequestResult } from '@fsd/shared/lib'
import {
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import { IMainSliderItem, MainSliderItemApi } from '../../../../api'
import { MAIN_SLIDER_ITEMS_QUERY_KEY } from './constants'

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
    queryFn: () => getMainSliderItemsRequest(),
    queryKey: getMainSliderItemsQueryKey(),
    ...(config || {}),
  })
