import { query } from '@fsd/shared/api'

import { ICategory } from './types'

export class CategoriesApi {
  static getAll = async () => await query<ICategory[]>('categories')
}
