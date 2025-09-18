import { Box, Container, Grid } from '@mui/material'

import { AdvantagesGrid } from './advantagesGrid'
import { BannerGrid } from './bannerGrid'
import { BannerInfo } from './bannerInfo'
import { BlogSection } from './blogSection'
import { MainSlider } from './mainSlider'
import { ProductsSlider } from './productsSlider'
import { SubscribeForm } from './subscribeForm'
import { WelcomeText } from './welcomeText'

export const HomePage = () => (
  <>
    <Container>
      <Grid container spacing={5}>
        <Grid size={12}>
          <Grid container spacing={4}>
            <Grid size={12}>
              <MainSlider />
            </Grid>
            <Grid size={12}>
              <WelcomeText />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <BannerGrid />
        </Grid>
        <Grid size={12}>
          <ProductsSlider />
        </Grid>
        <Grid size={12}>
          <AdvantagesGrid />
        </Grid>
      </Grid>
    </Container>
    <Box sx={{ mb: 10, mt: 6 }}>
      <BannerInfo />
    </Box>
    <Container>
      <Grid container spacing={5}>
        <Grid size={12}>
          <BlogSection />
        </Grid>
      </Grid>
    </Container>
    <Box sx={{ mt: 10 }}>
      <SubscribeForm />
    </Box>
  </>
)
