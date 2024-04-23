import { FC } from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const PaymentIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    viewBox="0 0 24 24"
    sx={{
      fill: 'none',
    }}
  >
    <rect
      x="2"
      y="4"
      width="20"
      height="16"
      rx="4"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle
      cx="2"
      cy="2"
      r="2"
      transform="matrix(1 0 0 -1 10 14)"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle
      cx="1"
      cy="1"
      r="1"
      transform="matrix(1 0 0 -1 17 13)"
      fill="currentColor"
    />
    <circle
      cx="1"
      cy="1"
      r="1"
      transform="matrix(1 0 0 -1 5 13)"
      fill="currentColor"
    />
  </SvgIcon>
)
