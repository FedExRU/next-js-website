import { query } from '../../../shared/api'
import { ICategory } from './types'

export class CategoriesApi {
  static readonly getAll = async () => await query<ICategory[]>('categories')
}
