import { TextFieldProps } from '@mui/material'

export type SiteSearchMobileProps = Pick<
  TextFieldProps,
  'aria-label' | 'name' | 'onChange' | 'placeholder' | 'value'
> & {
  icon?: React.ReactNode
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}
