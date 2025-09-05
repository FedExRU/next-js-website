export interface IBanner {
  appearAt: null | string
  createdAt: string
  createdBy: number
  href: null | string
  id: number
  image: null | string
  imageType: 'image' | 'svg'
  isHidden: boolean
  linkText: null | string
  placement: IBannerPlacement
  text: string
  updatedAt: string
}

export type IBannerPlacement = 'home' | 'menu'
