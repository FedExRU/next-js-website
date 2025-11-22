import { type DrawerProps as MuiDrawerProps } from '@mui/material'

import { ButtonProps } from '../button'

export type DrawerProps = Omit<MuiDrawerProps, 'title'> & {
  actionPrimary?: ButtonProps
  actionSecondary?: ButtonProps
  footer?: React.ReactNode
  htmlTitle?: MuiDrawerProps['title']
  title?: string
  titleIcon?: React.ReactNode
}
