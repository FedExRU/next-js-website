'use client'

import { CssBaseline } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import React, { FC } from 'react'

import { createTheme } from './createTheme'
import { ThemeProviderProps } from './types'

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  deviceType,
}) => (
  <MuiThemeProvider theme={createTheme(deviceType)}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)
