'use client'

import { ADVANTAGES_ICONS_MAP } from './constants'
import { UseAdvantagesUiDataReturnProps } from './types'

export const useAdvantagesUiData = (): UseAdvantagesUiDataReturnProps => {
  const getIconByAdvantageKind = (advantageKind: string) => {
    return (
      ADVANTAGES_ICONS_MAP[
        advantageKind as keyof typeof ADVANTAGES_ICONS_MAP
      ] || null
    )
  }

  return {
    getIconByAdvantageKind,
  }
}
