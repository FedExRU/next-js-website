import { SvgIcon, SvgIconProps } from '@mui/material'

export const PaymentIcon: React.FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    sx={{
      fill: 'none',
    }}
    viewBox="0 0 24 24"
  >
    <rect
      height="16"
      rx="4"
      stroke="currentColor"
      strokeWidth="1.5"
      width="20"
      x="2"
      y="4"
    />
    <circle
      cx="2"
      cy="2"
      r="2"
      stroke="currentColor"
      strokeWidth="1.5"
      transform="matrix(1 0 0 -1 10 14)"
    />
    <circle
      cx="1"
      cy="1"
      fill="currentColor"
      r="1"
      transform="matrix(1 0 0 -1 17 13)"
    />
    <circle
      cx="1"
      cy="1"
      fill="currentColor"
      r="1"
      transform="matrix(1 0 0 -1 5 13)"
    />
  </SvgIcon>
)
