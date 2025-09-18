import { query } from '../../../../shared/api'
import { IMainSliderItem } from './types'

export class MainSliderItemApi {
  static readonly getAll = async () =>
    await query<IMainSliderItem>('mainSliderItems')
}
