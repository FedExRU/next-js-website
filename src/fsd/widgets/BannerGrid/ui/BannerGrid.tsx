'use client'

import { Grid2 as Grid } from '@mui/material'
import { FC } from 'react'
import { Category, useGetCategoriesQuery } from '@fsd/entities/Categories'
import { GoToCategory } from '@fsd/features'
import { LAYOUT } from '@fsd/shared'

export const BannerGrid: FC = () => {
  const {
    data: { items: [firstCategory, secondCategory, thirdCategory] } = {
      items: [],
    },
    isLoading,
  } = useGetCategoriesQuery({
    limit: 3,
    orderBy: {
      field: 'updatedAt',
      direction: 'desc',
    },
  })

  const handleRenderAction = () => <GoToCategory skeleton={isLoading} />

  return (
    <Grid container spacing={{ xs: 2, sm: 3 }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Category
          {...firstCategory}
          skeleton={isLoading}
          renderAction={handleRenderAction}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Grid container spacing={{ xs: 2, sm: 3 }}>
          <Grid size={12}>
            <Category
              {...secondCategory}
              skeleton={isLoading}
              layout={LAYOUT.SECONDARY}
              renderAction={handleRenderAction}
            />
          </Grid>
          <Grid size={12}>
            <Category
              {...thirdCategory}
              skeleton={isLoading}
              layout={LAYOUT.SECONDARY}
              renderAction={handleRenderAction}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
