import { query } from '@fsd/shared/api'

import { ISocialNetwork } from './types'

export class SocialNetworksApi {
  static readonly get = async () => {
    const data = await query<ISocialNetwork>('socialNetworks')

    return data
  }
  static readonly getSocialNetworkByKind = async (kind: string) => {
    const data = await query<ISocialNetwork>('socialNetworks')

    return data.items.filter(socialNetwork => socialNetwork.kind === kind)
  }
}
