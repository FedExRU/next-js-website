import { Grid } from '@mui/material'

import { BadgeDiscount, BadgeNew } from '../../../../shared/ui'
import { BadgesProps } from './types'

export const Badges: React.FC<BadgesProps> = ({ discountPercent, isNew }) => {
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
