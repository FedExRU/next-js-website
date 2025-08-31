import { logoByColor } from './constants'
import { SiteLogoProps } from './types'

export const SiteLogo: React.FC<SiteLogoProps> = ({ color = 'primary' }) =>
  logoByColor[color || 'primary']
