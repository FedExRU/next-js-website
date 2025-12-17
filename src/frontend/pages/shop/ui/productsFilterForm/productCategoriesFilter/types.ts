import { BaseFilterFieldProps } from '../types'

export type ProductCategoriesFilterProps = BaseFilterFieldProps & {
  name?: string
  value?: string
}

export type ProductCategoryFilterBaseProps = Pick<
  BaseFilterFieldProps,
  'label' | 'options'
> & {
  name?: string
  value?: string
}
