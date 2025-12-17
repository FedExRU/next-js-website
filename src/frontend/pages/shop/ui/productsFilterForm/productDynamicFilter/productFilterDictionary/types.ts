import { BaseFilterFieldProps } from '../../types'

export type DictionaryValue = {
  id: number | string
  value: string
}

export type ProductFilterDictionaryProps = BaseFilterFieldProps & {
  name?: string
  value?: string
}
