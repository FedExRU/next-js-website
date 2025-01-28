import { SvgIcon, SvgIconProps } from '@mui/material'
import { FC } from 'react'

export const CalendarIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    sx={{
      fill: 'none',
    }}
    viewBox="0 0 24 24"
  >
    <path
      d="M16 2V5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
    <path
      d="M8 2V5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
    <path
      d="M3 7.5C3 5.29086 4.79086 3.5 7 3.5H17C19.2091 3.5 21 5.29086 21 7.5V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V7.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M3 9H21"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </SvgIcon>
)
