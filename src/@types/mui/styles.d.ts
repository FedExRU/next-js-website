import { CSSProperties } from 'react'
import {
  TypographyVariants as MuiTypographyVariants,
  TypographyVariantsOptions as MuiTypographyVariantsOptions,
} from '@mui/material'

declare module '@mui/material/styles' {
  interface TypographyVariants extends MuiTypographyVariants {
    h7: CSSProperties
    text1: CSSProperties
    text2: CSSProperties
    text3: CSSProperties
    caption1: CSSProperties
    caption2: CSSProperties
  }
  interface TypographyVariantsOptions extends MuiTypographyVariantsOptions {
    h7?: CSSProperties
    text1?: CSSProperties
    text2?: CSSProperties
    text3?: CSSProperties
    caption1?: CSSProperties
    caption2?: CSSProperties
  }
}
