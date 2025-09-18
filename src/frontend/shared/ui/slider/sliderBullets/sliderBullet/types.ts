export type GetStylesProps = Pick<SliderBulletProps, 'isActive'>

export type SliderBulletProps = {
  'aria-label'?: string
  isActive?: boolean
  onClick?: () => void
}
