import { IProduct } from '@fsd/entities'

export const SWIPER_SCROLLBAR_HEIGHT = 4 as const

export const SLIDES_PER_VIEW = 4 as const

export const MOCK_DATA = {
  items: Array.from({ length: 4 }).map((_, id) => ({
    id,
  })) as IProduct[],
}
