import { ROUTES } from '@fsd/shared/routes'
import { Box } from '@mui/material'
import Link from 'next/link'

import { SiteLogo } from '../Logos'
import { SiteLogoLinkProps } from './types'

export const SiteLogoLink: React.FC<SiteLogoLinkProps> = ({ color }) => (
  <Box component={Link} href={ROUTES.HOME.path} sx={{ display: 'inline-flex' }}>
    <SiteLogo color={color} />
  </Box>
)
