import { query } from '@fsd/shared/api'

import { IAdvantage } from './types'

export class AdvantagesApi {
  static get = async () => {
    const data = await query<IAdvantage>('advantages')

    return data
  }
  static getAdvantageByKind = async (kind: string) => {
    const data = await query<IAdvantage>('advantages')

    return data.items.filter(advantage => advantage.kind === kind)
  }
  static getKinds = async () => {
    const data = await query<IAdvantage>('advantagesKinds')

    return data
  }
}
