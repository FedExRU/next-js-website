import { IProduct } from './types'
import { query } from '@fsd/shared'

export class ProductsApi {
  static getFeatured = async () => await query<IProduct>('products')
}
