import { ReactNode } from 'react'

import { ADVANTAGES_KIND } from './constants'

export type AdvantagesDataMap = Record<AdvantagesKind, IAdvantage>

export type AdvantagesKind =
  (typeof ADVANTAGES_KIND)[keyof typeof ADVANTAGES_KIND]

export interface IAdvantage {
  description: string
  icon: ReactNode
  title: string
}

export type UseAdvantagesReturnProps = {
  getAdvantageData: (kind: AdvantagesKind) => IAdvantage
  getAdvantagesKinds: () => AdvantagesKind[]
}
