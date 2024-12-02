import { ICategory, IGetAllArgs } from './types'
import { query } from '@fsd/shared'

export class CategoriesApi {
  static getAll = async ({
    limit: l,
    orderBy: { field, direction } = { field: 'id', direction: 'desc' },
  }: IGetAllArgs = {}) => {
   
    return await query<ICategory>('categories')
  }
}
