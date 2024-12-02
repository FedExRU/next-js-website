import { ICategory } from './types'
import { query } from '@fsd/shared'

export class CategoriesApi {
  static getAll = async () => await query<ICategory[]>('categories')
}
