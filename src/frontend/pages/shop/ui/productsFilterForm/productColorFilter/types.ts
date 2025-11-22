import { BaseFilterFieldProps } from '../types'

export type ProductColorFilterProps = BaseFilterFieldProps & {
  name?: string
  value?: (null | string)[]
}
