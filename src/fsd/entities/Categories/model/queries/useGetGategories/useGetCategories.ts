'use client'

import { type RequestError, type RequestResult } from '@fsd/shared'
import {
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import { CategoriesApi, ICategory } from '../../../api'
import { CATEGORIES_QUERY_KEY } from './constants'
import { UseGetCategoriesOptions } from './types'

export const getCategoiesQueryKey = (): QueryKey => [CATEGORIES_QUERY_KEY]

const getCategoiesRequest = async () => {
  const data = await CategoriesApi.getAll()

  return data
}

export const useGetCategoriesQuery = <T = RequestResult<ICategory[]>>(
  options?: UseGetCategoriesOptions,
  config?: Partial<
    UseQueryOptions<RequestResult<ICategory[]>, RequestError, T>
  >,
): UseQueryResult<T, RequestError> =>
  useQuery({
    queryFn: () => getCategoiesRequest(),
    queryKey: getCategoiesQueryKey(),
    ...(config || {}),
  })
