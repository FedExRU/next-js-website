'use client'

import { IResponseRowsProductsContract } from '@common/interfaces'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

import { ProductsApi } from '../../../api'
import { DEFAULT_LIMIT, PRODUCTS_QUERY_KEY } from './constants'
import { UseGetProductsInfiniteOptions } from './types'

export const getProductsInfiniteQueryKey = (): QueryKey => [PRODUCTS_QUERY_KEY]

const getProductsInfiniteRequest = async (
  options: UseGetProductsInfiniteOptions,
) => {
  const data = await ProductsApi.get(options)

  return data
}

export const useGetProductsInfiniteQuery = (
  options?: UseGetProductsInfiniteOptions,
  config?: UseInfiniteQueryOptions<
    AxiosResponse<IResponseRowsProductsContract>,
    AxiosError,
    InfiniteData<AxiosResponse<IResponseRowsProductsContract>, number>,
    AxiosResponse<IResponseRowsProductsContract>,
    QueryKey,
    number
  >,
) =>
  useInfiniteQuery<
    AxiosResponse<IResponseRowsProductsContract>,
    AxiosError,
    InfiniteData<AxiosResponse<IResponseRowsProductsContract>, number>,
    QueryKey,
    number
  >({
    initialPageParam: 0,
    ...(config || {}),
    getNextPageParam: (lastPage, pages) => {
      return pages.length * (options?.limit ?? DEFAULT_LIMIT) >=
        lastPage.data.data.total
        ? undefined
        : pages.length
    },
    queryFn: ({ pageParam }) =>
      getProductsInfiniteRequest({
        ...options,
        offset: pageParam * (options?.limit ?? DEFAULT_LIMIT),
      }),
    queryKey: getProductsInfiniteQueryKey(),
  })
