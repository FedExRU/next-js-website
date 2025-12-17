import { FilterFormField } from '../types'

export type ProductDynamicFilterProps<
  TComponentProps = Record<string, unknown>,
> = FilterFormField<TComponentProps> & {
  values?: string[]
}

export type ProductFilterFieldProps = {
  label?: ProductDynamicFilterProps['label']
  value?: string
}
