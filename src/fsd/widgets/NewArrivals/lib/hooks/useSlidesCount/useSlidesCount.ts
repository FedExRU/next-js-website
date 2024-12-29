'use client'

import { useMediaQuery } from '@mui/material'

export const useSlidesCount = () => {
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const isLaptop = useMediaQuery(theme => theme.breakpoints.between('sm', 'md'))
  const isDESKTOP = useMediaQuery(theme => theme.breakpoints.up('md'))

  if (isTablet) {
    return 1
  }

  if (isLaptop) {
    return 2
  }

  if (isDESKTOP) {
    return 4
  }

  return 4
}
