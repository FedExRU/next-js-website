import {
  TypographyVariants as MuiTypographyVariants,
  TypographyVariantsOptions as MuiTypographyVariantsOptions,
} from '@mui/material'
import { CSSProperties } from 'react'

declare module '@mui/material/styles' {
  interface TypographyVariants extends MuiTypographyVariants {
    body1Bold?: CSSProperties
    body1Semi?: CSSProperties
    body2Bold?: CSSProperties
    body2Semi?: CSSProperties
    caption1?: CSSProperties
    caption1Bold?: CSSProperties
    caption1Semi?: CSSProperties
    caption2?: CSSProperties
    caption2Bold?: CSSProperties
    caption2Semi?: CSSProperties
    h7?: CSSProperties
    hairline1?: CSSProperties
    hairline1Bold?: CSSProperties
    hairline1Semi?: CSSProperties
    hairline2?: CSSProperties
    hairline2Bold?: CSSProperties
    hairline2Semi?: CSSProperties
    text1?: CSSProperties
    text1Bold?: CSSProperties
    text1Semi?: CSSProperties
    text2?: CSSProperties
    text2Bold?: CSSProperties
    text2Semi?: CSSProperties
    text3?: CSSProperties
    text3Bold?: CSSProperties
    text3Semi?: CSSProperties
  }
  interface TypographyVariantsOptions extends MuiTypographyVariantsOptions {
    body1Bold?: CSSProperties
    body1Semi?: CSSProperties
    body2Bold?: CSSProperties
    body2Semi?: CSSProperties
    caption1?: CSSProperties
    caption1Bold?: CSSProperties
    caption1Semi?: CSSProperties
    caption2?: CSSProperties
    caption2Bold?: CSSProperties
    caption2Semi?: CSSProperties
    h7?: CSSProperties
    hairline1?: CSSProperties
    hairline1Bold?: CSSProperties
    hairline1Semi?: CSSProperties
    hairline2?: CSSProperties
    hairline2Bold?: CSSProperties
    hairline2Semi?: CSSProperties
    text1?: CSSProperties
    text1Bold?: CSSProperties
    text1Semi?: CSSProperties
    text2?: CSSProperties
    text2Bold?: CSSProperties
    text2Semi?: CSSProperties
    text3?: CSSProperties
    text3Bold?: CSSProperties
    text3Semi?: CSSProperties
  }
}
