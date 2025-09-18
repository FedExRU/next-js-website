import { query } from '../../../shared/api'
import { IBanner } from './types'

export class BannersApi {
  static readonly getByPlacement = async (placement: string) => {
    const data = await query<IBanner>('banners')

    return {
      ...data,
      items: data.items.filter(banner => banner.placement === placement),
    }
  }
}
