import { FC } from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const RadioIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    viewBox="0 0 20 20"
    sx={{
      fill: 'none',
      height: 20,
      width: 20,
    }}
  >
    <rect
      x="1"
      y="1.17358"
      width="18"
      height="18"
      rx="9"
      stroke="currentColor"
      strokeMiterlimit="0"
      strokeLinejoin="bevel"
    />
  </SvgIcon>
)
