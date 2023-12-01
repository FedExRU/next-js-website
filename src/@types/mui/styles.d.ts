import { CSSProperties } from 'react'
import {
  TypographyVariants as MuiTypographyVariants,
  TypographyVariantsOptions as MuiTypographyVariantsOptions,
} from '@mui/material'

declare module '@mui/material/styles' {
  interface TypographyVariants extends MuiTypographyVariants {
    h7?: CSSProperties
    text1?: CSSProperties
    text2?: CSSProperties
    text3?: CSSProperties
    caption1?: CSSProperties
    caption2?: CSSProperties
    hairline2?: CSSProperties
    hairline2Bold?: CSSProperties
    text1Semi?: CSSProperties
    text2Semi?: CSSProperties
    body1Semi?: CSSProperties
    text3Semi?: CSSProperties
    body2Semi?: CSSProperties
    caption1Semi?: CSSProperties
    caption2Semi?: CSSProperties
    text1Bold?: CSSProperties
    text2Bold?: CSSProperties
    body1Bold?: CSSProperties
    text3Bold?: CSSProperties
    body2Bold?: CSSProperties
    caption1Bold?: CSSProperties
    caption2Bold?: CSSProperties
  }
  interface TypographyVariantsOptions extends MuiTypographyVariantsOptions {
    h7?: CSSProperties
    text1?: CSSProperties
    text2?: CSSProperties
    text3?: CSSProperties
    caption1?: CSSProperties
    caption2?: CSSProperties
    hairline2?: CSSProperties
    hairline2Bold?: CSSProperties
    text1Semi?: CSSProperties
    text2Semi?: CSSProperties
    body1Semi?: CSSProperties
    text3Semi?: CSSProperties
    body2Semi?: CSSProperties
    caption1Semi?: CSSProperties
    caption2Semi?: CSSProperties
    text1Bold?: CSSProperties
    text2Bold?: CSSProperties
    body1Bold?: CSSProperties
    text3Bold?: CSSProperties
    body2Bold?: CSSProperties
    caption1Bold?: CSSProperties
    caption2Bold?: CSSProperties
  }
}
