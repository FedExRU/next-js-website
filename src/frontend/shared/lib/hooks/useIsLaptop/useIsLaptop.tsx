'use client'

import { useMediaQuery, useTheme } from '@mui/material'

export const useIsLaptop = () => {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.between('md', 'lg'))
}
