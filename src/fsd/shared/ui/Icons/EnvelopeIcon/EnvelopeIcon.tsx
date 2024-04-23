import { FC } from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const EnvelopeIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    viewBox="0 0 24 25"
    sx={{
      fill: 'none',
    }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.07675 7.36766C4.23299 6.85549 4.70925 6.48291 5.27254 6.48291H19.2725C19.8358 6.48291 20.3121 6.85549 20.4683 7.36766L12.2725 12.8315L4.07675 7.36766ZM2.52257 7.71917C2.52244 7.72718 2.52242 7.73517 2.52254 7.74317V17.7329C2.52254 19.2517 3.75376 20.4829 5.27254 20.4829H19.2725C20.7913 20.4829 22.0225 19.2517 22.0225 17.7329V7.74314M20.5225 9.1343V17.7329C20.5225 18.4233 19.9629 18.9829 19.2725 18.9829H5.27254C4.58218 18.9829 4.02254 18.4233 4.02254 17.7329V9.1343L11.8565 14.3569C12.1084 14.5249 12.4366 14.5249 12.6886 14.3569L20.5225 9.1343ZM22.0225 7.7192C22.0151 6.20673 20.7868 4.98291 19.2725 4.98291H5.27254C3.75834 4.98291 2.52997 6.20671 2.52257 7.71917"
      fill="currentColor"
    />
  </SvgIcon>
)