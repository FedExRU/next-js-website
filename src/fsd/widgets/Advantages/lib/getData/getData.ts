import { data } from './data'
import { AdvantagesKind } from './types'

export const getData = (kind: AdvantagesKind) => data[kind]
