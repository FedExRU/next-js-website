import { FC } from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

const InstagramIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    viewBox="0 0 24 24"
    sx={{
      fill: 'none',
    }}
  >
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="4"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="18" cy="6" r="1" fill="currentColor" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
  </SvgIcon>
)

export default InstagramIcon
