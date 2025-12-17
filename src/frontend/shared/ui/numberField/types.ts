import { TextFieldProps, TextFieldVariants } from '@mui/material'

export type NumberFieldProps<
  Variant extends TextFieldVariants = TextFieldVariants,
> = Omit<TextFieldProps<Variant>, 'type'>
