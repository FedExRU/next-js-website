import { SvgIcon, SvgIconProps } from '@mui/material'

export const CheckboxIcon: React.FC<SvgIconProps> = props => (
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
      fill="#FCFCFD"
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
      strokeWidth="1.5"
      width="22.5"
      x="0.75"
      y="0.923615"
    />
  </SvgIcon>
)
