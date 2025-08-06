'use client'

import { GoToCategory } from '@fsd/features'
import { Typography } from '@fsd/shared'
import { Box, Grid } from '@mui/material'
import Image from 'next/image'

import infoBannerImage from './assets/info-banner.webp'
import { getStyles } from './styles'

const { styles } = getStyles()

export const BannerInfo = () => (
  <Grid container>
    <Grid size={{ md: 6, xs: 12 }}>
      <Box sx={styles.bannerInfoImageWrapper}>
        <Image
          alt="Info Image"
          fill
          src={infoBannerImage}
          style={{
            objectFit: 'cover',
          }}
        />
      </Box>
    </Grid>
    <Grid size={{ md: 6, xs: 12 }}>
      <Box sx={styles.bannerInfoContentWrapper}>
        <Box sx={styles.bannerInfoContent}>
          <Typography color="secondary" variant="hairline1Bold">
            SALE UP TO 35% OFF
          </Typography>
          <Typography
            component="h3"
            sx={styles.bannerInfoContentTitle}
            variant={{ sm: 'h4', xs: 'h5' }}
          >
            HUNDREDS of New lower prices!
          </Typography>
          <Typography
            component="p"
            sx={{ mt: 2 }}
            variant={{ sm: 'body1', xs: 'body2' }}
          >
            It&apos;s more affordable than ever to give every room in your home
            a stylish makeover
          </Typography>
          <Box sx={{ mt: 3 }}>
            <GoToCategory />
          </Box>
        </Box>
      </Box>
    </Grid>
  </Grid>
)
