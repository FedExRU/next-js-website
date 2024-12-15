'use client'

import {
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import { ProductsApi, IProduct } from '../../../api'
import { NEW_PRODUCTS_QUERY_KEY } from './constants'
import { UseGetNewProductsOptions } from './types'
import { type RequestResult, type RequestError } from '@fsd/shared'

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
    queryKey: getNewProductsQueryKey(),
    queryFn: () => getNewProductsRequest(),
    ...(config || {}),
  })
