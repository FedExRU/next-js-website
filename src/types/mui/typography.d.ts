import { TypographyPropsVariantOverrides as MuiTypographyPropsVariantOverrides } from '@mui/material'

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides
    extends MuiTypographyPropsVariantOverrides {
    h7: true
    text1: true
    text2: true
    text3: true
    caption1: true
    caption2: true
    text1Semi: true
    text2Semi: true
    body1Semi: true
    text3Semi: true
    body2Semi: true
    caption1Semi: true
    caption2Semi: true
    text1Bold: true
    text2Bold: true
    body1Bold: true
    text3Bold: true
    body2Bold: true
    caption1Bold: true
    caption2Bold: true
    hairline1?: true
    hairline1Semi?: true
    hairline1Bold?: true
    hairline2?: true
    hairline2Semi?: true
    hairline2Bold?: true
  }
}
