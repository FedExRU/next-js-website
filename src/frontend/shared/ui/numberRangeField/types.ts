import { TextFieldVariants } from '@mui/material'

import { NumberFieldProps } from '../numberField'

export type NumberRangeFieldProps<
  Variant extends TextFieldVariants = TextFieldVariants,
> = {
  inputEndProps?: Omit<NumberFieldProps<Variant>, 'label'>
  inputStartProps?: Omit<NumberFieldProps<Variant>, 'label'>
  label?: React.ReactNode
}
