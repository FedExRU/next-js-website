'use client'

import type { RequestError, RequestResult } from '@fsd/shared/lib'

import {
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import { ISocialNetwork, SocialNetworksApi } from '../../../api'
import { SOCIAL_NETWORKS_QUERY_KEY } from './constants'
import { UseGetSocialNetworksOptions } from './types'

export const getSocialNetworksQueryKey = (): QueryKey => [
  SOCIAL_NETWORKS_QUERY_KEY,
]

const getSocialNetworksRequest = async () => {
  const data = await SocialNetworksApi.get()

  return data
}

export const useGetSocialNetworksQuery = <T = RequestResult<ISocialNetwork>>(
  options?: UseGetSocialNetworksOptions,
  config?: Partial<
    UseQueryOptions<RequestResult<ISocialNetwork>, RequestError, T>
  >,
): UseQueryResult<T, RequestError> =>
  useQuery({
    queryFn: () => getSocialNetworksRequest(),
    queryKey: getSocialNetworksQueryKey(),
    ...(config || {}),
  })
