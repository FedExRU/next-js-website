'use client'

import { useIsLaptop } from '../useIsLaptop'
import { useIsMobile } from '../useIsMobile'
import { useIsTablet } from '../useIsTablet'
import { UseAdaptiveReturnProps } from './types'

export const useAdaptive = (): UseAdaptiveReturnProps => {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const isLaptop = useIsLaptop()

  return {
    isTablet,
    isMobile,
    isLaptop,
  }
}
