import { FC } from 'react'
import { Grid2 as Grid, Typography } from '@mui/material'
import { PriceProps } from './types'

export const Price: FC<PriceProps> = ({ value, valueDiscount }) => (
  <Grid container spacing={1.5}>
    <Grid>
      <Typography variant="caption1Semi">${valueDiscount || value}</Typography>
    </Grid>
    {valueDiscount && (
      <Grid>
        <Typography
          variant="caption1"
          color="text.secondary"
          sx={{ textDecoration: 'line-through' }}
        >
          ${value}
        </Typography>
      </Grid>
    )}
  </Grid>
)
