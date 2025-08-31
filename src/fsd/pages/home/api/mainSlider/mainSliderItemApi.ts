import { query } from '@fsd/shared/api'

import { IMainSliderItem } from './types'

export class MainSliderItemApi {
  static getAll = async () => await query<IMainSliderItem>('mainSliderItems')
}
