'use client'

import { IResponseRowsColorsContract } from '@common/interfaces'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

import { ColorsApi } from '../../../api'
import { COLORS_QUERY_KEY, DEFAULT_LIMIT } from './constants'
import { UseGetColorsInfiniteOptions } from './types'

export const getColorsInfiniteQueryKey = (): QueryKey => [COLORS_QUERY_KEY]

const getColorsInfiniteRequest = async (
  options: UseGetColorsInfiniteOptions,
) => {
  const data = await ColorsApi.get(options)

  return data
}

export const useGetColorsInfiniteQuery = (
  options?: UseGetColorsInfiniteOptions,
  config?: Partial<
    UseInfiniteQueryOptions<
      AxiosResponse<IResponseRowsColorsContract>,
      AxiosError,
      InfiniteData<AxiosResponse<IResponseRowsColorsContract>, number>,
      AxiosResponse<IResponseRowsColorsContract>,
      QueryKey,
      number
    >
  >,
) =>
  useInfiniteQuery<
    AxiosResponse<IResponseRowsColorsContract>,
    AxiosError,
    InfiniteData<AxiosResponse<IResponseRowsColorsContract>, number>,
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
      getColorsInfiniteRequest({
        ...options,
        offset: pageParam * (options?.limit ?? DEFAULT_LIMIT),
      }),
    queryKey: getColorsInfiniteQueryKey(),
  })
