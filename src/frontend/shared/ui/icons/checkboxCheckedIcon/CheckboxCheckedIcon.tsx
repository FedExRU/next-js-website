import { SvgIcon, SvgIconProps } from '@mui/material'

export const CheckboxCheckedIcon: React.FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    sx={{
      fill: 'none',
      height: 25,
      width: 24,
    }}
    viewBox="0 0 24 25"
  >
    <rect
      fill="currentColor"
      height="22.5"
      rx="3.25"
      width="22.5"
      x="0.75"
      y="0.923615"
    />
    <rect
      height="22.5"
      rx="3.25"
      stroke="currentColor"
      stroke-width="1.5"
      width="22.5"
      x="0.75"
      y="0.923615"
    />
    <path
      d="M6 12.1736L10 16.1736L18 8.17361"
      stroke="#FCFCFD"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
  </SvgIcon>
)
