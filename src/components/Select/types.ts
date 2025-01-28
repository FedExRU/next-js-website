import { MenuItemProps } from '@mui/material/MenuItem'
import { SelectProps as MuiSelectProps } from '@mui/material/Select'

export type SelectItem = MenuItemProps & {
  label: string
}

export type SelectProps = MuiSelectProps & {
  items?: SelectItem[]
  placeholder?: React.ReactNode | string
}
