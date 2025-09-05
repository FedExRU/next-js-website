'use client'

import type { RequestError, RequestResult } from '@fsd/shared/lib'

import {
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import { BannersApi, IBanner } from '../../../api'
import { GET_BANNER_BY_PLACEMENT_QUERY_KEY } from './constants'
import { UseGetBannerByPlacementOptions } from './types'

export const getBannerByPlacementQueryKey = (): QueryKey => [
  GET_BANNER_BY_PLACEMENT_QUERY_KEY,
]

const getBannerByPlacement = async (placement: string) => {
  const data = await BannersApi.getByPlacement(placement)

  return data
}

export const useGetBannerByPlacement = <T = RequestResult<IBanner>>(
  options: UseGetBannerByPlacementOptions,
  config?: Partial<UseQueryOptions<RequestResult<IBanner>, RequestError, T>>,
): UseQueryResult<T, RequestError> =>
  useQuery({
    queryFn: () => getBannerByPlacement(options.placement),
    queryKey: getBannerByPlacementQueryKey(),
    ...(config || {}),
  })
