import {
  AttributeType,
  IAttributeContract,
  IAttributeDictionaryValueContract,
  ICategoryContract,
  IColorContract,
} from '@common/interfaces'

export type BaseFilterFieldProps = {
  attributeType: AttributeType
  id: string
  label: string
  onChange: BuildFormArgs['handleChange']
  options?: { id: number | string; value: string }[]
}

export type BuildFormArgs = {
  attributeDictionaryValues: IAttributeDictionaryValueContract
  attributes: IAttributeContract[]
  categories: ICategoryContract[]
  colors: IColorContract[]
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type FilterFormField<TComponentProps = Record<string, unknown>> = Omit<
  BaseFilterFieldProps,
  'name'
> & {
  Component?: React.ComponentType<TComponentProps>
  name: [string, string] | string
}

export type ProductFilters = {
  [key: string]: string | string[]
  categoryId: string
  colorId: string[]
  price: [string, string]
}

export type ProductsFilterFormProps<TComponentProps = Record<string, unknown>> =
  {
    fields: FilterFormField<TComponentProps>[]
    filterValuesCount: number
    values: ProductFilters
  }
