import { SelectProps as MuiSelectProps } from '@mui/material/Select'
import { MenuItemProps } from '@mui/material/MenuItem'

export type SelectItem = MenuItemProps & {
  label: string
}

export type SelectProps = MuiSelectProps & {
  items?: SelectItem[]
  placeholder?: React.ReactNode | string
}
