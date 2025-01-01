import { FC } from 'react'
import { Grid2 as Grid, Box } from '@mui/material'
import { Advantage, useAdvantages } from '@fsd/entities'

export const FeaturesGrid: FC = () => {
  const { getAdvantageData, getAdvantagesKinds } = useAdvantages()
  return (
    <Box sx={{ mt: 1 }}>
      <Grid container spacing={{ xs: 1, sm: 3 }} sx={{ mt: { xs: -2, sm: 0 } }}>
        {getAdvantagesKinds().map(kind => (
          <Grid
            key={kind}
            size={{ xs: 6, md: 3 }}
            sx={{ mt: { xs: 2, sm: 0 } }}
          >
            <Advantage {...getAdvantageData(kind)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
