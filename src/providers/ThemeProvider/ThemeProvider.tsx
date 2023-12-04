'use client'

import React, { FC } from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ThemeProviderProps } from './types'
import { createTheme } from './createTheme'

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  deviceType,
}) => (
  <MuiThemeProvider theme={createTheme(deviceType)}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)
