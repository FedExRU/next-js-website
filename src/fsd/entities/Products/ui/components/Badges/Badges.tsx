import { Grid2 as Grid } from '@mui/material'
import { BadgeDiscount } from 'components/BadgeDiscount'
import { BadgeNew } from 'components/BadgeNew'
import { FC } from 'react'

import { BadgesProps } from './types'

export const Badges: FC<BadgesProps> = ({ discountPercent, isNew }) => {
  const showBadges = !!discountPercent || isNew

  if (!showBadges) {
    return null
  }

  return (
    <Grid container spacing={1}>
      {isNew && (
        <Grid size={12}>
          <BadgeNew />
        </Grid>
      )}
      {discountPercent && (
        <Grid size={12}>
          <BadgeDiscount value={discountPercent} />
        </Grid>
      )}
    </Grid>
  )
}
