/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProductFilters } from './productsFilterForm'

export const getDynamicFiltersValuesCount = ({
  categoryId,
  priceFrom,
  priceTo,
  ...rest
}: ProductFilters) =>
  Object.values(rest).filter(v => (Array.isArray(v) ? v.length > 0 : !!v))
    .length
