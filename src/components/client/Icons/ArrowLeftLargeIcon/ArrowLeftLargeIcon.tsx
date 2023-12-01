import { FC } from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

const ArrowLeftLargeIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    viewBox="0 0 32 32"
    sx={{
      fill: 'none',
    }}
  >
    <path
      d="M6.66675 16H25.3334"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66675 16L14.6667 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66675 16L14.6667 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
)

export default ArrowLeftLargeIcon
