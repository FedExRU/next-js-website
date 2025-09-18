import { SvgIcon, SvgIconProps } from '@mui/material'

export const MenuIcon: React.FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    sx={{
      fill: 'none',
    }}
    viewBox="0 0 24 24"
  >
    <path
      d="M7 8H17M7 12H17M7 16H17"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </SvgIcon>
)
