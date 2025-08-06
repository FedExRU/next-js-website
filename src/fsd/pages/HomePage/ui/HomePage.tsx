import {
  BannerGrid,
  BannerInfo,
  BlogSection,
  FeaturesGrid,
  MainSlider,
  NewArrivals,
  NotificationsPortalLazy as NotificationsPortal,
  SubscribeForm,
  WelcomeText,
} from '@fsd/widgets'
import { Box, Container, Grid } from '@mui/material'

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
          <NewArrivals />
        </Grid>
        <Grid size={12}>
          <FeaturesGrid />
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
    <NotificationsPortal />
  </>
)
