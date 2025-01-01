import { ReactNode } from 'react'
import { ADVANTAGES_KIND } from './constants'

export interface IAdvantage {
  icon: ReactNode
  title: string
  description: string
}

export type AdvantagesDataMap = Record<AdvantagesKind, IAdvantage>

export type AdvantagesKind =
  (typeof ADVANTAGES_KIND)[keyof typeof ADVANTAGES_KIND]

export type UseAdvantagesReturnProps = {
  getAdvantageData: (kind: AdvantagesKind) => IAdvantage
  getAdvantagesKinds: () => AdvantagesKind[]
}
