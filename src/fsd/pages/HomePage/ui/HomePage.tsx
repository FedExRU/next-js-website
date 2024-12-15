'use client'

import { Container, Grid2 as Grid } from '@mui/material'
import { BannerGrid, MainSlider } from '@fsd/widgets'

export const HomePage = () => {
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid size={12}>
          <MainSlider />
        </Grid>
        <Grid size={12}>
          <BannerGrid />
        </Grid>
      </Grid>
    </Container>
  )
}
