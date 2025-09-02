import { TextFieldProps } from '@mui/material'

export type GetSiteSearchDesktopStylesProps = {
  isOpen?: boolean
}

export type SiteSearchDesktopProps = Pick<
  TextFieldProps,
  'aria-label' | 'name' | 'onChange' | 'placeholder' | 'value'
> & {
  icon?: React.ReactNode
  onClose?: () => void
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}
