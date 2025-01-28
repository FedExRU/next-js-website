import { TypographyPropsVariantOverrides as MuiTypographyPropsVariantOverrides } from '@mui/material'

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides
    extends MuiTypographyPropsVariantOverrides {
    body1Bold: true
    body1Semi: true
    body2Bold: true
    body2Semi: true
    caption1: true
    caption1Bold: true
    caption1Semi: true
    caption2: true
    caption2Bold: true
    caption2Semi: true
    h7: true
    hairline1?: true
    hairline1Bold?: true
    hairline1Semi?: true
    hairline2?: true
    hairline2Bold?: true
    hairline2Semi?: true
    text1: true
    text1Bold: true
    text1Semi: true
    text2: true
    text2Bold: true
    text2Semi: true
    text3: true
    text3Bold: true
    text3Semi: true
  }
}
