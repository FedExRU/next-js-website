import { ADVANTAGES_KIND } from './constants'
import { data } from './data'
import { AdvantagesKind, UseAdvantagesReturnProps } from './types'

export const useAdvantages = (): UseAdvantagesReturnProps => {
  const getAdvantageData = (kind: AdvantagesKind) => data[kind]

  const getAdvantagesKinds = () =>
    Object.values(ADVANTAGES_KIND) as AdvantagesKind[]

  return {
    getAdvantageData,
    getAdvantagesKinds,
  }
}
