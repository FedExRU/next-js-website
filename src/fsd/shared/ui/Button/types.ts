import {
  Breakpoint,
  ButtonProps as MuiButtonProps,
  SxProps,
  Theme,
} from '@mui/material'

export type ButtonProps = (ButtonVariantAdaptive | ButtonVariantStatic) &
  Omit<MuiButtonProps, 'size'>

export type ButtonVariantAdaptive = {
  size?: Partial<Record<Breakpoint, MuiButtonProps['size']>>
}

export type ButtonVariantStatic = {
  size?: MuiButtonProps['size']
}

export type GetSxArgs = {
  size?: ButtonVariantAdaptive['size']
  sx?: SxProps<Theme>
}
