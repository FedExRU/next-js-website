import { API_ROUTES } from '@common/api'
import {
  IResponseMapAttributeDictionaryValuesContract,
  IResponseRowsAttributeContract,
  IResponseRowsCategoriesContract,
  IResponseRowsColorsContract,
} from '@common/interfaces'
import { ShopPage } from '@frontend/pages/shop'
import { HEADERS } from 'app/constants'
import { headers } from 'next/headers'
import { sprintf } from 'sprintf-js'

import { generateMetadata as generateMetadataFunc, getPageData } from '../utils'

export const generateMetadata = generateMetadataFunc

export default async function Shop() {
  const { data: page } = await getPageData()
  const headersList = await headers()

  const origin = headersList.get(HEADERS.ORIGIN)

  const attributesResponse = await fetch(
    `${origin}${sprintf(API_ROUTES.ATTRIBUTES)}`,
  )
  const attributeDictionaryValuesResponse = await fetch(
    `${origin}${sprintf(API_ROUTES.ATTRIBUTE_DICTIONARY_VALUES)}`,
  )
  const categoriesResponse = await fetch(
    `${origin}${sprintf(API_ROUTES.CATEGORIES_ALL)}`,
  )
  const colorsResponse = await fetch(`${origin}${sprintf(API_ROUTES.COLORS)}`)

  const attributesData =
    (await attributesResponse.json()) as IResponseRowsAttributeContract

  const attributeDictionaryValuesData =
    (await attributeDictionaryValuesResponse.json()) as IResponseMapAttributeDictionaryValuesContract

  const categoriesData =
    (await categoriesResponse.json()) as IResponseRowsCategoriesContract

  const colorsData =
    (await colorsResponse.json()) as IResponseRowsColorsContract

  if (attributesResponse.status === 500) {
    throw new Error(attributesData.code)
  }

  if (attributeDictionaryValuesResponse.status === 500) {
    throw new Error(attributeDictionaryValuesData.code)
  }

  if (categoriesResponse.status === 500) {
    throw new Error(categoriesData.code)
  }

  if (colorsResponse.status === 500) {
    throw new Error(colorsData.code)
  }

  return (
    <ShopPage
      attributeDictionaryValues={attributeDictionaryValuesData.data.map}
      attributes={attributesData.data.rows}
      categories={categoriesData.data}
      colors={colorsData.data.rows}
      page={page}
    />
  )
}
