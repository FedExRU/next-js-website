import { FC } from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

const ArrowRightLargeIcon: FC<SvgIconProps> = props => (
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
      d="M17.3333 24L25.3333 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.3333 8L25.3333 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
)

export default ArrowRightLargeIcon
