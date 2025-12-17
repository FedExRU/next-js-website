import { ProductCategoryFilterBaseProps } from '../types'

export type ProductCategoryFilterAutocompleteProps =
  ProductCategoryFilterBaseProps & {
    onChange?: (
      event: React.SyntheticEvent,
      value: { id: number | string; value: string },
      valueObject?: { id: number | string; value: string },
    ) => void
  }
