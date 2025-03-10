'use client'

import { useAdaptive } from '@fsd/shared'

export const useSlidesCount = () => {
  const { isLaptop, isMobile, isTablet } = useAdaptive()

  if (isMobile) {
    return 1
  }

  if (isTablet) {
    return 2
  }

  if (isLaptop) {
    return 3
  }

  return 4
}
