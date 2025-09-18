'use client'

import { useIsDesktop } from '../useIsDesktop'
import { useIsLaptop } from '../useIsLaptop'
import { useIsMobile } from '../useIsMobile'
import { useIsTablet } from '../useIsTablet'
import { UseAdaptiveReturnProps } from './types'

export const useAdaptive = (): UseAdaptiveReturnProps => {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const isLaptop = useIsLaptop()
  const isDesktop = useIsDesktop()

  return {
    isDesktop,
    isLaptop,
    isMobile,
    isTablet,
  }
}
