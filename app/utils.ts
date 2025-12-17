import { API_ROUTES } from '@common/api'
import { REQUEST_HEADERS } from '@common/constants'
import { IEntityPageResponseContract } from '@common/interfaces'
import { Metadata } from 'next'
import { headers } from 'next/headers'
import { sprintf } from 'sprintf-js'

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getPageData()

  return {
    description: data.metaDescription,
    keywords: data.metaKeywords,
    title: data.metaTitle,
  }
}
export async function getPageData(): Promise<IEntityPageResponseContract> {
  const headersList = await headers()
  const requestedPath = headersList.get(REQUEST_HEADERS.PATHNAME)
  const origin = headersList.get(REQUEST_HEADERS.ORIGIN)

  const response = await fetch(
    `${origin}${sprintf(API_ROUTES.PAGE, { pagePath: requestedPath })}`,
  )

  const data = (await response.json()) as IEntityPageResponseContract

  if (response.status === 500) {
    throw new Error(data.code)
  }

  return data
}
