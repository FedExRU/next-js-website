import { SvgIcon, SvgIconProps } from '@mui/material'
import { FC } from 'react'

export const LockIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    sx={{
      fill: 'none',
    }}
    viewBox="0 0 24 24"
  >
    <path
      d="M16 8H8M16 8C18.2091 8 20 9.79086 20 12V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V12C4 9.79086 5.79086 8 8 8M16 8V6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6V8M12 16V14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </SvgIcon>
)
