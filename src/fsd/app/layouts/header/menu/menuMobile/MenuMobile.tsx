import { LAYOUT, VIEW } from '@fsd/shared/lib'
import {
  CloseIcon,
  IconButton,
  MenuIcon,
  MenuList,
  SiteLogoLink,
} from '@fsd/shared/ui'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Drawer,
  Grid,
} from '@mui/material'
import React from 'react'

import { CartButton } from '../cartButton'
import { SiteSearch } from '../siteSearch'
import { Toolbar } from '../toolbar'
import { WishlistButton } from '../wishlistButton'
import { getStyles } from './styles'

const { styles } = getStyles()
import { COMMON_ROUTES } from '@fsd/shared/routes'
import { SocialNetworksList } from '@fsd/widgets/socialNetworks'

import { AuthButton } from '../authButton'
import { MenuMobileProps } from './types'

const routes = [
  {
    ...COMMON_ROUTES.CART,
    icon: <CartButton />,
  },
  {
    ...COMMON_ROUTES.WISHLIST,
    icon: <WishlistButton />,
  },
]

export const MenuMobile: React.FC<MenuMobileProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleDrawer = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <Box sx={styles.menuContainer}>
      <Box sx={styles.menuWrapper}>
        <Box sx={styles.menuWrapperPartLogo}>
          <Button onClick={toggleDrawer} sx={styles.menuButton}>
            <MenuIcon fontSize="large" />
          </Button>
          <SiteLogoLink />
        </Box>
        <Box sx={styles.menuWrapperPart}>
          <Toolbar
            slots={{
              cart: <CartButton />,
            }}
          />
        </Box>
      </Box>
      <Drawer
        onClose={toggleDrawer}
        open={isOpen}
        slotProps={{
          paper: {
            sx: styles.menuDrawerPaper,
          },
        }}
      >
        <Card elevation={0} sx={styles.menuDrawer}>
          <CardHeader
            sx={styles.menuDrawerHeader}
            title={
              <Box component="span" sx={styles.menuDrawerHeaderContent}>
                <SiteLogoLink />
                <IconButton
                  aria-label="Close Menu"
                  noElevation
                  onClick={toggleDrawer}
                >
                  <CloseIcon fontSize="large" />
                </IconButton>
              </Box>
            }
          />
          <CardContent sx={styles.menuDrawerContent}>
            <Grid container spacing={2}>
              <Grid size={12}>
                <SiteSearch view={VIEW.MOBILE} />
              </Grid>
              <Grid size={12}>{children}</Grid>
            </Grid>
          </CardContent>
          <CardActions sx={styles.menuDrawerFooter}>
            <Grid container spacing={3} sx={styles.menuDrawerFooterGrid}>
              <Grid size={12}>
                <MenuList items={routes} view={VIEW.MOBILE} />
              </Grid>
              <Grid size={12}>
                <AuthButton view={VIEW.MOBILE} />
              </Grid>
              <Grid size={12}>
                <SocialNetworksList
                  layout={LAYOUT.PRIMARY}
                  view={VIEW.MOBILE}
                />
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Drawer>
    </Box>
  )
}
