'use client'

import {
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import { MainSliderItemApi, IMainSliderItem } from '../../../api'
import { MAIN_SLIDER_ITEMS_QUERY_KEY } from './constants'

export const getMainSliderItemsQueryKey = (): QueryKey => [
  MAIN_SLIDER_ITEMS_QUERY_KEY,
]

const getMainSliderItemsRequest = async () => {
  const data = await MainSliderItemApi.getAll()

  return data
}

export const useGetMainSliderItemsQuery = <T = Required<IMainSliderItem>>(
  config?: Partial<
    UseQueryOptions<Required<IMainSliderItem>, Required<any>, T>
  >,
): UseQueryResult<T, Required<any>> =>
  useQuery({
    queryKey: getMainSliderItemsQueryKey(),
    queryFn: () => getMainSliderItemsRequest(),
    ...(config || {}),
  })
