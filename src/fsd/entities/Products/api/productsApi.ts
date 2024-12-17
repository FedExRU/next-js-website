import { IProduct } from './types'
import { query } from '@fsd/shared'

export class ProductsApi {
  static getNew = async () => await query<IProduct>('featrueSliderItems')
}
