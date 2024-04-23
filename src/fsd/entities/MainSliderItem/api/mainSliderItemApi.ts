import { collection, getDocs, query } from 'firebase/firestore/lite'
import { IMainSliderItem } from './types'
import { db, getResult } from '@fsd/shared'

export class MainSliderItemApi {
  static getAll = () =>
    getResult<IMainSliderItem>(getDocs(query(collection(db, 'main-slider'))))
}
