export type ProductsSortProps = {
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  sortItems?: SortItem[]
  value?: string
}

export type SortItem = {
  label: string
  value: string
}
