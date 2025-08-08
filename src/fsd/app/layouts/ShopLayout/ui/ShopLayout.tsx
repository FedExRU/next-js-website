'use client'

import { SiteLogoLink, Slogan, useAdaptive } from '@fsd/shared'
import { Copyright, FooterMenu, SocialNetworksList } from '@fsd/widgets'
import { Box, Container, Divider, Grid } from '@mui/material'

import { getStyles } from './styles'

const { styles } = getStyles()

export const ShopLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isMobile, isTablet } = useAdaptive()
  return (
    <>
      <main>{children}</main>
      <Box component="footer" sx={styles.footer}>
        <Container>
          <Box sx={styles.footerWrapper}>
            <Grid
              container
              justifyContent={{ md: 'space-between', xs: 'center' }}
              spacing={5}
            >
              <Grid size={{ md: 6, xs: 12 }}>
                <Grid alignItems="center" container spacing={{ md: 4, xs: 2 }}>
                  <Grid size={{ md: 'auto', xs: 12 }}>
                    <Box sx={styles.footerLogoWrapper}>
                      <SiteLogoLink color="secondary" />
                    </Box>
                  </Grid>
                  <Grid size={{ md: 'auto', xs: 12 }}>
                    <Divider
                      orientation={
                        isMobile || isTablet ? 'horizontal' : 'vertical'
                      }
                      sx={styles.footerLogoDivider}
                    />
                  </Grid>
                  <Grid size={{ md: 'auto', xs: 12 }}>
                    <Box sx={styles.footerSlogan}>
                      <Slogan />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid size={{ md: 6, xs: 12 }}>
                <Box justifyContent="flex-end" sx={styles.footerFlexWrapper}>
                  <FooterMenu />
                </Box>
              </Grid>
            </Grid>
            <Box sx={styles.footerSectionsDividerWraper}>
              <Divider />
            </Box>
            <Box sx={styles.footerCopyrightAndSocialBlock}>
              <Grid container justifyContent="space-between" spacing={4}>
                <Grid order={{ md: 1, xs: 2 }} size={{ md: 'auto', xs: 12 }}>
                  <Copyright />
                </Grid>
                <Grid order={{ md: 2, xs: 1 }} size={{ md: 'auto', xs: 12 }}>
                  <Box sx={styles.footerSocialNetworks}>
                    <SocialNetworksList />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}
