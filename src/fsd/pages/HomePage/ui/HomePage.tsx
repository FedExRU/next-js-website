'use client'

import * as React from 'react'
import { Container, Grid2 as Grid } from '@mui/material'
import {
  BannerGrid,
  MainSlider,
  WelcomeText,
  NewArrivals,
  Advantages,
} from '@fsd/widgets'

export const HomePage = () => {
  return (
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
          <Advantages />
        </Grid>
      </Grid>
    </Container>
  )
}
