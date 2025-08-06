'use client'

import {
  Advantage,
  useAdvantagesUiData,
  useGetAdvantagesQuery,
} from '@fsd/entities'
import { Box, Grid } from '@mui/material'

export const FeaturesGrid: React.FC = () => {
  const { data, isLoading } = useGetAdvantagesQuery()
  const { getIconByAdvantageKind } = useAdvantagesUiData()

  return (
    <Box sx={{ mt: 1 }}>
      <Grid container spacing={{ sm: 3, xs: 1 }} sx={{ mt: { sm: 0, xs: -2 } }}>
        {isLoading &&
          Array.from({ length: 4 }).map((_, i) => (
            <Grid key={i} size={{ md: 3, xs: 6 }} sx={{ mt: { sm: 0, xs: 2 } }}>
              <Advantage skeleton />
            </Grid>
          ))}
        {!isLoading &&
          data?.items.map(({ description, id, kind, title }) => (
            <Grid
              key={id}
              size={{ md: 3, xs: 6 }}
              sx={{ mt: { sm: 0, xs: 2 } }}
            >
              <Advantage
                description={description}
                icon={getIconByAdvantageKind(kind)}
                title={title}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  )
}
