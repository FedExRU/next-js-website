import { ProductsSortProps, SortItem } from './productsSort'

export type ProductsListProps = {
  currentCategoryName?: string
  onSortChange?: ProductsSortProps['onChange']
  sortItems?: SortItem[]
  sortName?: string
  sortValue?: string
  toolbarJsx?: React.ReactNode
}
