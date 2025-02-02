import { Skeleton } from '@fsd/shared'
import { Grid2 as Grid, Typography } from '@mui/material'
import { FC } from 'react'

import { PriceProps } from './types'

export const Price: FC<PriceProps> = ({ skeleton, value, valueDiscount }) => (
  <Grid container spacing={1.5}>
    <Grid>
      {skeleton ? (
        <Skeleton height={17} width={50.2} />
      ) : (
        <Typography variant="caption1Semi">
          ${valueDiscount || value}
        </Typography>
      )}
    </Grid>
    {valueDiscount && (
      <Grid>
        <Typography
          color="text.secondary"
          sx={{ textDecoration: 'line-through' }}
          variant="caption1"
        >
          ${value}
        </Typography>
      </Grid>
    )}
  </Grid>
)
