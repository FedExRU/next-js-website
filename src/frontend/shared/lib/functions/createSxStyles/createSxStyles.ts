import { SxProps, Theme } from '@mui/material'

export type SxStyleModel<TName extends number | string | symbol> = Record<
  TName,
  SxProps<Theme>
>

export type SxStyles<
  TName extends number | string | symbol,
  TClassName extends number | string | symbol = string,
> = {
  classes: Record<TClassName, string>
  styles: Record<TName, Required<SxProps<Theme>>>
}

export const createSxStyles = <
  TName extends number | string | symbol = string,
  TClassName extends number | string | symbol = string,
>(
  model: SxStyleModel<TName>,
  classes?: Record<TClassName, string>,
) => ({ classes, styles: model }) as SxStyles<TName, TClassName>
