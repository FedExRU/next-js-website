import { SvgIcon, SvgIconProps } from '@mui/material'
import { FC } from 'react'

export const RadioCheckedIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    sx={{
      fill: 'none',
      height: 20,
      width: 20,
    }}
    viewBox="0 0 20 20"
  >
    <rect
      height="18"
      rx="9"
      stroke="currentColor"
      strokeLinejoin="bevel"
      strokeMiterlimit="0"
      width="18"
      x="1"
      y="1.17358"
    />
    <circle cx="10" cy="10.1736" fill="currentColor" r="5" />
  </SvgIcon>
)
