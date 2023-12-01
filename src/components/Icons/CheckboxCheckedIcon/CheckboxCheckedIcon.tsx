import { FC } from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const CheckboxCheckedIcon: FC<SvgIconProps> = props => (
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
      fill="currentColor"
    />
    <rect
      x="0.75"
      y="0.923615"
      width="22.5"
      height="22.5"
      rx="3.25"
      stroke="currentColor"
      stroke-width="1.5"
    />
    <path
      d="M6 12.1736L10 16.1736L18 8.17361"
      stroke="#FCFCFD"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
)
