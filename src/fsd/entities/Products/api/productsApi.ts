import { IProduct } from './types'
import { query } from '@fsd/shared'

export class ProductsApi {
  static getNew = async () => {
    const data = await query<IProduct>('products')

    return {
      ...data,
      items: data.items.filter(product => product.isNew),
    }
  }
}
