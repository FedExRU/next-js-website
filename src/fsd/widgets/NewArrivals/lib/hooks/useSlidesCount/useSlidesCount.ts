'use client'

import { useMediaQuery } from '@mui/material'

export const useSlidesCount = () => {
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const isLaptop = useMediaQuery(theme => theme.breakpoints.between('sm', 'md'))
  const isDesctop = useMediaQuery(theme => theme.breakpoints.up('md'))

  if (isTablet) {
    return 1
  }

  if (isLaptop) {
    return 2
  }

  if (isDesctop) {
    return 4
  }

  return 4
}
