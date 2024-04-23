import {
  query,
  orderBy,
  limit,
  collection,
  getDocs,
  QueryConstraint,
} from 'firebase/firestore/lite'
import { ICategory, IGetAllArgs } from './types'
import { db, getResult } from '@fsd/shared'

export class CategoriesApi {
  static getAll = ({
    limit: l,
    orderBy: { field, direction } = { field: 'id', direction: 'desc' },
  }: IGetAllArgs = {}) => {
    const constraints: QueryConstraint[] = [orderBy(field, direction)]

    if (l) {
      constraints.push(limit(l))
    }

    const q = query(collection(db, 'categories'), ...constraints)

    return getResult<ICategory>(getDocs(q))
  }
}
