import { SvgIcon, SvgIconProps } from '@mui/material'

export const ChevronRightIcon: React.FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    sx={{
      ...props?.sx,
      fill: 'none',
    }}
    viewBox="0 0 12 13"
  >
    <path
      d="M4.58423 3.17358L7.58423 6.17358L4.58423 9.17358"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.75"
    />
  </SvgIcon>
)
