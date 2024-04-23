import { FC } from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const YoutubeIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    viewBox="0 0 24 24"
    sx={{
      fill: 'none',
    }}
  >
    <rect
      x="2"
      y="3"
      width="20"
      height="18"
      rx="4"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </SvgIcon>
)