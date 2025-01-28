import { FC } from 'react'

import { logoBySize } from './constants'
import { SiteLogoProps } from './types'

export const SiteLogo: FC<SiteLogoProps> = ({ size = 'medium' }) =>
  logoBySize[size]
