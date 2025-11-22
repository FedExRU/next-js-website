export type GetStylesProps = Pick<ProductCategoryItemProps, 'isActive'>

export type ProductCategoryItemProps = {
  isActive?: boolean
  label?: string
  name?: string
  onClick?: () => void
  value?: number | string
}
