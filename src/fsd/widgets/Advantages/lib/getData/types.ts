import { ReactNode } from 'react'
import { ADVANTAGES_KIND } from './constants'

export type AdvantagesData = {
  icon: ReactNode
  title: string
  description: string
}

export type AdvantagesDataMap = Record<AdvantagesKind, AdvantagesData>

export type AdvantagesKind =
  (typeof ADVANTAGES_KIND)[keyof typeof ADVANTAGES_KIND]
