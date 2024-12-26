import { Theme } from '@mui/material'
import { SxProps } from '@mui/system'

export type SxStyleModel<TName extends string | number | symbol> = Record<
  TName,
  SxProps<Theme>
>

export type SxStyles<
  TName extends string | number | symbol,
  TClassName extends string | number | symbol = string,
> = {
  styles: Record<TName, Required<SxProps<Theme>>>
  classes: Record<TClassName, string>
}

export const createSxStyles = <
  TName extends string | number | symbol = string,
  TClassName extends string | number | symbol = string,
>(
  model: SxStyleModel<TName>,
  classes?: Record<TClassName, string>,
) => ({ styles: model, classes }) as SxStyles<TName, TClassName>
