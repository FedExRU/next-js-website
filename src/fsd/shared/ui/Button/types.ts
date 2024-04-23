import {
  Breakpoint,
  ButtonProps as MuiButtonProps,
  SxProps,
  Theme,
} from '@mui/material'

export type ButtonVariantStatic = {
  size?: MuiButtonProps['size']
}

export type ButtonVariantAdaptive = {
  size?: Partial<Record<Breakpoint, MuiButtonProps['size']>>
}

export type ButtonProps = Omit<MuiButtonProps, 'size'> &
  (ButtonVariantStatic | ButtonVariantAdaptive)

export type GetSxArgs = {
  sx?: SxProps<Theme>
  size?: ButtonVariantAdaptive['size']
}
