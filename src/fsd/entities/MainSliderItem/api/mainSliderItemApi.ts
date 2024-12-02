import { IMainSliderItem } from './types'
import { query } from '@fsd/shared'

export class MainSliderItemApi {
  static getAll = async () => await query<IMainSliderItem>('mainSliderItems')
}
