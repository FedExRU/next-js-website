import { SvgIcon, SvgIconProps } from '@mui/material'

export const ArrowRightLargeIcon: React.FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    sx={{
      fill: 'none',
    }}
    viewBox="0 0 32 32"
  >
    <path
      d="M6.66675 16H25.3334"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M17.3333 24L25.3333 16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M17.3333 8L25.3333 16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </SvgIcon>
)
