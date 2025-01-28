import { SvgIcon, SvgIconProps } from '@mui/material'
import { FC } from 'react'

export const InstagramIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    sx={{
      fill: 'none',
    }}
    viewBox="0 0 24 24"
  >
    <rect
      height="20"
      rx="4"
      stroke="currentColor"
      strokeWidth="1.5"
      width="20"
      x="2"
      y="2"
    />
    <circle cx="18" cy="6" fill="currentColor" r="1" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
  </SvgIcon>
)
