'use client'

import { Container, Grid } from '@mui/material'
import { BannerGrid, MainSliderSection } from '@fsd/widgets'

export const HomePage = () => {
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <MainSliderSection />
        </Grid>
        <Grid item xs={12}>
          <BannerGrid />
        </Grid>
      </Grid>
    </Container>
  )
}
