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
        body: {
          height: '100%',
        },
        html: {
          height: '100%',
          scrollPaddingTop: DEFAULT_HEADER_HEIGHT,
        },
        main: {
          minHeight: '100%',
        },
      }}
    />
    {children}
  </MuiThemeProvider>
)
