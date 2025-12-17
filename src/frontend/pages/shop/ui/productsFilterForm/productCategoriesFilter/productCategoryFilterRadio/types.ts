import { ProductCategoryFilterBaseProps } from '../types'

export type ProductCategoryFilterRadioProps = ProductCategoryFilterBaseProps & {
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
    valueObject?: { id: number | string; value: string },
  ) => void
}
