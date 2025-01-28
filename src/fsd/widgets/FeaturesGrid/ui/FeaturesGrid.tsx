import { Advantage, useAdvantages } from '@fsd/entities'
import { Box, Grid2 as Grid } from '@mui/material'
import { FC } from 'react'

export const FeaturesGrid: FC = () => {
  const { getAdvantageData, getAdvantagesKinds } = useAdvantages()
  return (
    <Box sx={{ mt: 1 }}>
      <Grid container spacing={{ sm: 3, xs: 1 }} sx={{ mt: { sm: 0, xs: -2 } }}>
        {getAdvantagesKinds().map(kind => (
          <Grid
            key={kind}
            size={{ md: 3, xs: 6 }}
            sx={{ mt: { sm: 0, xs: 2 } }}
          >
            <Advantage {...getAdvantageData(kind)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
