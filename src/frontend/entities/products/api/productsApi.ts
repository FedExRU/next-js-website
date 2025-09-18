import { query } from '../../../shared/api'
import { IProduct } from './types'

export class ProductsApi {
  static readonly getNew = async () => {
    const data = await query<IProduct>('products')

    return {
      ...data,
      items: data.items.filter(product => product.isNew),
    }
  }
}
