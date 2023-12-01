import { FC } from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const ChevronRightIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    viewBox="0 0 12 13"
    sx={{
      ...props?.sx,
      fill: 'none',
    }}
  >
    <path
      d="M4.58423 3.17358L7.58423 6.17358L4.58423 9.17358"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
)
