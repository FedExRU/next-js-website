import { API_ROUTES } from '@common/api'
import {
  ICategoryContract,
  IRequestCategoriesContract,
  IResponseRowsContract,
} from '@common/interfaces'

import { axios, query } from '../../../shared/api'

export class CategoriesApi {
  static readonly get = async (filters: IRequestCategoriesContract = {}) => {
    const data = await axios.get<IResponseRowsContract<ICategoryContract>>(
      `${API_ROUTES.CATEGORIES}?${new URLSearchParams({
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
  static readonly getAll = async () =>
    await query<ICategoryContract[]>('categories')
}
