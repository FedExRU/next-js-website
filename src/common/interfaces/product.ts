import { IRequestBaseContract, IResponseRowsContract } from './common'

export interface IProductContract {
  discountPercentage: null | number
  discountPrice: null | number
  id: number
  image: string
  imageLarge: null | string
  imageMedium: null | string
  imageSmall: null | string
  name: string
  new: boolean
  price: number
}

export interface IRequestProductsContract
  extends IRequestBaseContract<IProductContract> {}

export interface IResponseRowsProductsContract
  extends IResponseRowsContract<IProductContract> {}
