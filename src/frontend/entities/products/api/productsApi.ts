import { API_ROUTES } from '@common/api'
import { IRequestProductsContract } from '@common/interfaces'
import { IResponseRowsContract } from '@common/interfaces/common'

import { axios, query } from '../../../shared/api'
import { IProduct } from './types'

export class ProductsApi {
  static readonly get = async (filters: IRequestProductsContract = {}) => {
    const data = await axios.get<IResponseRowsContract<IProduct>>(
      `${API_ROUTES.PRODUCTS}?${new URLSearchParams({
        ...filters,
        ...(filters.orderBy
          ? {
              orderByDirection: filters.orderBy?.direction,
              orderByField: filters.orderBy?.field,
            }
          : {}),
      } as unknown as Record<string, string>)}`,
    )

    return data
  }
  static readonly getNew = async () => {
    const data = await query<IProduct>('products')

    return {
      ...data,
      items: data.items.filter(product => product.isNew),
    }
  }
}
