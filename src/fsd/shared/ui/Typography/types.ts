import {
  Breakpoint,
  TypographyProps as MuiTypographyProps,
  SxProps,
  Theme,
} from '@mui/material'

export type TypographyVariantStatic = {
  variant?: MuiTypographyProps['variant']
}

export type TypographyVariantAdaptive = {
  variant?: Partial<Record<Breakpoint, keyof Theme['typography']>>
}

export type TypographyProps = Omit<MuiTypographyProps, 'variant'> &
  (TypographyVariantStatic | TypographyVariantAdaptive)

export type GetSxArgs = {
  sx?: SxProps<Theme>
  variant?: TypographyVariantAdaptive['variant']
}
