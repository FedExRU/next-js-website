'use client'

import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material'

import { DEFAULT_HEADER_HEIGHT } from '../../../shared/lib'
import { createTheme } from './createTheme'
import { ThemeProviderProps } from './types'

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  deviceType,
}) => (
  <MuiThemeProvider theme={createTheme(deviceType)}>
    <CssBaseline />
    <GlobalStyles
      styles={{
        html: {
          scrollPaddingTop: DEFAULT_HEADER_HEIGHT,
        },
      }}
    />
    {children}
  </MuiThemeProvider>
)
