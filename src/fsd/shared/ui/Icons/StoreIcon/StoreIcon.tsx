import { SvgIcon, SvgIconProps } from '@mui/material'
import { FC } from 'react'

export const StoreIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    sx={{
      fill: 'none',
    }}
    viewBox="0 0 24 24"
  >
    <path
      d="M20 12V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V12"
      stroke="#141718"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M16.7687 2H7.23122C5.41387 2 3.7796 3.24476 3.10466 5.14305L2.34667 7.27487C2.11723 7.92019 1.95862 8.61074 2.12598 9.27488C2.52232 10.8478 3.8082 12 5.3333 12C7.17424 12 8.66663 10.3211 8.66663 8.25C8.66663 10.3211 10.159 12 12 12C13.8409 12 15.3333 10.3211 15.3333 8.25C15.3333 10.3211 16.8257 12 18.6666 12C20.1917 12 21.4776 10.8478 21.8739 9.27488C22.0413 8.61074 21.8827 7.92019 21.6533 7.27487L20.8953 5.14305C20.2203 3.24475 18.5861 2 16.7687 2Z"
      stroke="#141718"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M9 19C9 17.3431 10.3431 16 12 16C13.6569 16 15 17.3431 15 19V22H9V19Z"
      stroke="#141718"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </SvgIcon>
)
