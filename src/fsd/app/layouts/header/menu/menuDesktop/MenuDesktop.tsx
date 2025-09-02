import { SiteLogoLink } from '@fsd/shared/ui'
import { Box } from '@mui/material'
import React from 'react'

import { AuthButton } from '../authButton'
import { CartButton } from '../cartButton'
import { SiteSearch } from '../siteSearch'
import { Toolbar } from '../toolbar'
import { getStyles } from './styles'
import { MenuDesktopProps } from './types'

const { styles } = getStyles()

export const MenuDesktop: React.FC<MenuDesktopProps> = ({ children }) => {
  return (
    <Box sx={styles.menuContainer}>
      <SiteLogoLink />
      {children}
      <Toolbar
        slots={{
          auth: <AuthButton />,
          cart: <CartButton />,
          siteSearch: <SiteSearch view="desktop" />,
        }}
      />
    </Box>
  )
}
