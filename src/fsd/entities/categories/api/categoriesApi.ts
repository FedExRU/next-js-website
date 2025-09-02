import { query } from '@fsd/shared/api'

import { ICategory } from './types'

export class CategoriesApi {
  static readonly getAll = async () => await query<ICategory[]>('categories')
}
