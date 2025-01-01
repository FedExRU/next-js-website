'use client'

import * as React from 'react'
import { Container, Grid2 as Grid, Box } from '@mui/material'
import {
  BannerGrid,
  MainSlider,
  WelcomeText,
  NewArrivals,
  FeaturesGrid,
  BannerInfo,
  BlogSection,
  SubscribeForm,
} from '@fsd/widgets'

export const HomePage = () => {
  return (
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
      <Box sx={{ mt: 6, mb: 10 }}>
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
}
