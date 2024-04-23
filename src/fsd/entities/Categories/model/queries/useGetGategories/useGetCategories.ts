'use client'

import {
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import { FirestoreError } from 'firebase/firestore/lite'
import { CategoriesApi, ICategory } from '../../../api'
import { CATEGORIES_QUERY_KEY } from './constants'
import { UseGetCategoriesOptions } from './types'
import { FirebaseResult } from '@fsd/shared'

export const getCategoiesQueryKey = (): QueryKey => [CATEGORIES_QUERY_KEY]

const getCategoiesRequest = async (options?: UseGetCategoriesOptions) => {
  const data = await CategoriesApi.getAll(options)

  return data
}

export const useGetCategoiesQuery = <T = FirebaseResult<ICategory>>(
  options?: UseGetCategoriesOptions,
  config?: Partial<
    UseQueryOptions<FirebaseResult<ICategory>, FirestoreError, T>
  >,
): UseQueryResult<T, FirestoreError> =>
  useQuery({
    queryKey: getCategoiesQueryKey(),
    queryFn: () => getCategoiesRequest(options),
    ...(config || {}),
  })
