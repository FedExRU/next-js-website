import {
  IAttributeContract,
  IAttributeDictionaryValueContract,
  IColorContract,
  IPageContract,
  IResponseRowsCategoriesContract,
  OrderByContract,
} from '@common/interfaces'

import { ProductFilters } from './productsFilterForm'

export type FormFilters = LimitFilters & ProductFilters & SortFilters

export type LimitFilters = {
  limit: string
}

export type OrderByItem = {
  label: string
  value: OrderByContract
}

export type ShopPageProps = {
  attributeDictionaryValues: IAttributeDictionaryValueContract
  attributes: IAttributeContract[]
  categories: IResponseRowsCategoriesContract['data']
  colors: IColorContract[]
  page: IPageContract
}

export type SortFilters = {
  sort: string
}
