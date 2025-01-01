import { Grid2 as Grid, Box } from '@mui/material'
import Image from 'next/image'
import infoBannerImage from './assets/info-banner.webp'
import { getStyles } from './styles'
import { GoToCategory } from '@fsd/features'
import { Typography } from '@fsd/shared'

const { styles } = getStyles()

export const BannerInfo = () => (
  <Grid container>
    <Grid size={{ xs: 12, md: 6 }}>
      <Box sx={styles.bannerInfoImageWrapper}>
        <Image
          alt="Info Image"
          src={infoBannerImage}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </Box>
    </Grid>
    <Grid size={{ xs: 12, md: 6 }}>
      <Box sx={styles.bannerInfoContentWrapper}>
        <Box sx={styles.bannerInfoContent}>
          <Typography color="secondary" variant="hairline1Bold">
            SALE UP TO 35% OFF
          </Typography>
          <Typography
            variant={{ xs: 'h5', sm: 'h4' }}
            component="p"
            sx={styles.bannerInfoContentTitle}
          >
            HUNDREDS of New lower prices!
          </Typography>
          <Typography
            variant={{ xs: 'body2', sm: 'body1' }}
            component="p"
            sx={{ mt: 2 }}
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
