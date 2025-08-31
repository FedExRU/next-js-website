import { query } from '@fsd/shared/api'

import { ISocialNetwork } from './types'

export class SocialNetworksApi {
  static get = async () => {
    const data = await query<ISocialNetwork>('socialNetworks')

    return data
  }
  static getSocialNetworkByKind = async (kind: string) => {
    const data = await query<ISocialNetwork>('socialNetworks')

    return data.items.filter(socialNetwork => socialNetwork.kind === kind)
  }
}
