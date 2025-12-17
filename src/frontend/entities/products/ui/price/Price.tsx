import { Grid, Typography } from '@mui/material'

import { Skeleton } from '../../../../shared/ui'
import { PriceProps } from './types'

export const Price: React.FC<PriceProps> = ({
  skeleton,
  value,
  valueDiscount,
}) => (
  <Grid container spacing={1.5}>
    <Grid>
      {skeleton ? (
        <Skeleton height={17} width={50.2} />
      ) : (
        <Typography
          component={valueDiscount ? 'ins' : 'p'}
          sx={{ display: 'block', textDecoration: 'none' }}
          variant="caption1Semi"
        >
          ${valueDiscount || value}
        </Typography>
      )}
    </Grid>
    {valueDiscount && (
      <Grid>
        <Typography
          color="text.secondary"
          component="del"
          sx={{ display: 'block', textDecoration: 'line-through' }}
          variant="caption1"
        >
          ${value}
        </Typography>
      </Grid>
    )}
  </Grid>
)
