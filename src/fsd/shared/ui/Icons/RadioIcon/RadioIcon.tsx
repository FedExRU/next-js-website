import { SvgIcon, SvgIconProps } from '@mui/material'

export const RadioIcon: React.FC<SvgIconProps> = props => (
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
  </SvgIcon>
)
