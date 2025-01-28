import { SvgIcon, SvgIconProps } from '@mui/material'
import { FC } from 'react'

export const ArrowLeftLargeIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    sx={{
      fill: 'none',
    }}
    viewBox="0 0 32 32"
  >
    <path
      d="M6.66675 16H25.3334"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M6.66675 16L14.6667 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M6.66675 16L14.6667 8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </SvgIcon>
)
