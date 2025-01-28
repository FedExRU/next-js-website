'use client'

import { type RequestError, type RequestResult } from '@fsd/shared'
import {
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import { IProduct, ProductsApi } from '../../../api'
import { NEW_PRODUCTS_QUERY_KEY } from './constants'
import { UseGetNewProductsOptions } from './types'

export const getNewProductsQueryKey = (): QueryKey => [NEW_PRODUCTS_QUERY_KEY]

const getNewProductsRequest = async () => {
  const data = await ProductsApi.getNew()

  return data
}

export const useGetNewProductsQuery = <T = RequestResult<IProduct>>(
  options?: UseGetNewProductsOptions,
  config?: Partial<UseQueryOptions<RequestResult<IProduct>, RequestError, T>>,
): UseQueryResult<T, RequestError> =>
  useQuery({
    queryFn: () => getNewProductsRequest(),
    queryKey: getNewProductsQueryKey(),
    ...(config || {}),
  })
