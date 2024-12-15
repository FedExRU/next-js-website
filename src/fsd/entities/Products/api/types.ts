export interface IProduct {
  id: number
  name: string
  image: string
  createdAt: string
  updatedAt: string
  price: number
  priceDiscount: number | null
  discountPercent: number | null
  rating: number
  isNew: boolean
}
