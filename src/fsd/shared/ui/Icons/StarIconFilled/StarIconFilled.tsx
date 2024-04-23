import { FC } from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const StarIconFilled: FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    viewBox="0 0 16 17"
    sx={{
      fill: 'currentColor',
      height: 16,
      width: 17,
    }}
  >
    <path
      d="M8 1.4756L9.53708 5.17119C9.68109 5.51742 10.0067 5.75399 10.3805 5.78396L14.3702 6.10381L11.3305 8.70767C11.0457 8.95162 10.9213 9.3344 11.0083 9.69915L11.937 13.5924L8.52125 11.5061C8.20124 11.3106 7.79876 11.3106 7.47875 11.5061L4.063 13.5924L4.99169 9.69915C5.0787 9.3344 4.95433 8.95162 4.66954 8.70767L1.6298 6.10381L5.61951 5.78396C5.9933 5.75399 6.31891 5.51742 6.46292 5.17119L8 1.4756Z"
      stroke="currentColor"
    />
  </SvgIcon>
)
