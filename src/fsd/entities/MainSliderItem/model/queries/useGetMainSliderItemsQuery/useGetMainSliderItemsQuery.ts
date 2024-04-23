'use client'

import {
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import { FirestoreError } from 'firebase/firestore/lite'
import { MainSliderItemApi, IMainSliderItem } from '../../../api'
import { MAIN_SLIDER_ITEMS_QUERY_KEY } from './constants'
import { FirebaseResult } from '@fsd/shared'

export const getMainSliderItemsQueryKey = (): QueryKey => [
  MAIN_SLIDER_ITEMS_QUERY_KEY,
]

const getMainSliderItemsRequest = async () => {
  const data = await MainSliderItemApi.getAll()

  return data
}

export const useGetMainSliderItemsQuery = <T = FirebaseResult<IMainSliderItem>>(
  config?: Partial<
    UseQueryOptions<FirebaseResult<IMainSliderItem>, FirestoreError, T>
  >,
): UseQueryResult<T, FirestoreError> =>
  useQuery({
    queryKey: getMainSliderItemsQueryKey(),
    queryFn: () => getMainSliderItemsRequest(),
    ...(config || {}),
  })
