'use client'

import {
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import { CategoriesApi, ICategory } from '../../../api'
import { CATEGORIES_QUERY_KEY } from './constants'
import { UseGetCategoriesOptions } from './types'
import { type RequestResult, type RequestError } from '@fsd/shared'

export const getCategoiesQueryKey = (): QueryKey => [CATEGORIES_QUERY_KEY]

const getCategoiesRequest = async () => {
  const data = await CategoriesApi.getAll()

  return data
}

export const useGetCategoiesQuery = <T = RequestResult<ICategory[]>>(
  options?: UseGetCategoriesOptions,
  config?: Partial<
    UseQueryOptions<RequestResult<ICategory[]>, RequestError, T>
  >,
): UseQueryResult<T, RequestError> =>
  useQuery({
    queryKey: getCategoiesQueryKey(),
    queryFn: () => getCategoiesRequest(),
    ...(config || {}),
  })
