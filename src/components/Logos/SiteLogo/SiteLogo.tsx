import { FC } from 'react'
import { SiteLogoProps } from './types'
import { logoBySize } from './constants'

export const SiteLogo: FC<SiteLogoProps> = ({ size = 'medium' }) =>
  logoBySize[size]
