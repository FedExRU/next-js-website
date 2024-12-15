'use client'

import {
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import { ProductsApi, IProduct } from '../../../api'
import { FEATURED_PRODUCTS_QUERY_KEY } from './constants'
import { UseGetCategoriesOptions } from './types'
import { type RequestResult, type RequestError } from '@fsd/shared'

export const getFeaturedProductsQueryKey = (): QueryKey => [
  FEATURED_PRODUCTS_QUERY_KEY,
]

const getFeaturedProductsRequest = async () => {
  const data = await ProductsApi.getFeatured()

  return data
}

export const useGetFeaturedProductsQuery = <T = RequestResult<IProduct>>(
  options?: UseGetCategoriesOptions,
  config?: Partial<UseQueryOptions<RequestResult<IProduct>, RequestError, T>>,
): UseQueryResult<T, RequestError> =>
  useQuery({
    queryKey: getFeaturedProductsQueryKey(),
    queryFn: () => getFeaturedProductsRequest(),
    ...(config || {}),
  })
