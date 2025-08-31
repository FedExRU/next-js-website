'use client'

import type { RequestError, RequestResult } from '@fsd/shared/lib'

import {
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import { ArticlesApi, IArticle } from '../../../api'
import { NEW_ARTICLES_QUERY_KEY } from './constants'
import { UseGetNewArticlesOptions } from './types'

export const getNewArticlesQueryKey = (): QueryKey => [NEW_ARTICLES_QUERY_KEY]

const getNewArticlesRequest = async () => {
  const data = await ArticlesApi.getNew()

  return data
}

export const useGetNewArticlesQuery = <T = RequestResult<IArticle>>(
  options?: UseGetNewArticlesOptions,
  config?: Partial<UseQueryOptions<RequestResult<IArticle>, RequestError, T>>,
): UseQueryResult<T, RequestError> =>
  useQuery({
    queryFn: () => getNewArticlesRequest(),
    queryKey: getNewArticlesQueryKey(),
    ...(config || {}),
  })
