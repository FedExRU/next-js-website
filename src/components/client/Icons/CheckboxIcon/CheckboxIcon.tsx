import { FC } from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

const CheckboxIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    viewBox="0 0 24 25"
    sx={{
      fill: 'none',
      height: 25,
      width: 24,
    }}
  >
    <rect
      x="0.75"
      y="0.923615"
      width="22.5"
      height="22.5"
      rx="3.25"
      fill="#FCFCFD"
    />
    <rect
      x="0.75"
      y="0.923615"
      width="22.5"
      height="22.5"
      rx="3.25"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </SvgIcon>
)

export default CheckboxIcon
