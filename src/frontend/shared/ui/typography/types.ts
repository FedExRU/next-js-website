import {
  Breakpoint,
  TypographyProps as MuiTypographyProps,
  SxProps,
  Theme,
} from '@mui/material'

export type GetSxArgs = {
  sx?: SxProps<Theme>
  variant?: TypographyVariantAdaptive['variant']
}

export type TypographyProps = Omit<MuiTypographyProps, 'variant'> &
  (TypographyVariantAdaptive | TypographyVariantStatic)

export type TypographyVariantAdaptive = {
  variant?: Partial<Record<Breakpoint, keyof Theme['typography']>>
}

export type TypographyVariantStatic = {
  variant?: MuiTypographyProps['variant']
}
