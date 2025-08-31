'use client'

import { Box, Grid } from '@mui/material'

import { useGetAdvantagesQuery } from '../../model'
import { Advantage } from './advantage'

export const AdvantagesGrid: React.FC = () => {
  const { data, isLoading } = useGetAdvantagesQuery()

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
          data?.items.map(({ id, ...rest }) => (
            <Grid
              key={id}
              size={{ md: 3, xs: 6 }}
              sx={{ mt: { sm: 0, xs: 2 } }}
            >
              <Advantage id={id} {...rest} />
            </Grid>
          ))}
      </Grid>
    </Box>
  )
}
