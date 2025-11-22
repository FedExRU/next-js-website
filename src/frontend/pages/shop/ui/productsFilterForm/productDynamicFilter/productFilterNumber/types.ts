import { BaseFilterFieldProps } from '../../types'

export type ProductFilterNumberProps = BaseFilterFieldProps & {
  name?: [string, string]
  value?: [string, string] | [string]
}
