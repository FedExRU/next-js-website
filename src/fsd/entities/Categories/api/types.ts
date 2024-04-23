import { DirectionOrder } from '@fsd/shared'

export interface ICategory {
  id: number
  image: string
  slug: string
  name: string
  createdAt: string
  updatedAt: string
}

export interface IGetAllArgs {
  limit?: number
  orderBy?: {
    field: keyof ICategory
    direction: DirectionOrder
  }
}
