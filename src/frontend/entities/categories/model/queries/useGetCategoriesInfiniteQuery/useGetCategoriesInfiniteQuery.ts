'use client'

import { IResponseRowsCategoriesContract } from '@common/interfaces'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

import { CategoriesApi } from '../../../api'
import { CATEGORIES_INFINITE_QUERY_KEY, DEFAULT_LIMIT } from './constants'
import { UseGetCategoriesInfiniteOptions } from './types'

export const getCategoriesInfiniteQueryKey = (): QueryKey => [
  CATEGORIES_INFINITE_QUERY_KEY,
]

const getCategoriesInfiniteRequest = async (
  options: UseGetCategoriesInfiniteOptions,
) => {
  const data = await CategoriesApi.get(options)

  return data
}

export const useGetCategoriesInfiniteQuery = (
  options?: UseGetCategoriesInfiniteOptions,
  config?: Partial<
    UseInfiniteQueryOptions<
      AxiosResponse<IResponseRowsCategoriesContract>,
      AxiosError,
      InfiniteData<AxiosResponse<IResponseRowsCategoriesContract>, number>,
      AxiosResponse<IResponseRowsCategoriesContract>,
      QueryKey,
      number
    >
  >,
) =>
  useInfiniteQuery<
    AxiosResponse<IResponseRowsCategoriesContract>,
    AxiosError,
    InfiniteData<AxiosResponse<IResponseRowsCategoriesContract>, number>,
    QueryKey,
    number
  >({
    initialPageParam: 0,
    ...(config || {}),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.data.data.rows.length === lastPage.data.data.total) {
        return undefined
      }
      return pages.length * (options?.limit ?? DEFAULT_LIMIT) >=
        lastPage.data.data.total
        ? undefined
        : pages.length
    },

    queryFn: ({ pageParam }) =>
      getCategoriesInfiniteRequest({
        ...options,
        offset: pageParam * (options?.limit ?? DEFAULT_LIMIT),
      }),
    queryKey: getCategoriesInfiniteQueryKey(),
  })
