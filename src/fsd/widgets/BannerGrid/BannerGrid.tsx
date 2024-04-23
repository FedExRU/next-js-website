'use client'

import { Grid } from '@mui/material'
import { FC } from 'react'
import { Category, useGetCategoiesQuery } from '@fsd/entities/Categories'
import { GoToCategory } from '@fsd/features'

export const BannerGrid: FC = () => {
  const {
    data: { items: [firstCategory, secondCategory, thirdCategory] } = {
      items: [],
    },
    isLoading,
  } = useGetCategoiesQuery({
    limit: 3,
    orderBy: {
      field: 'updatedAt',
      direction: 'desc',
    },
  })

  const handleRenderActionButton = () => <GoToCategory skeleton={isLoading} />

  return (
    <Grid container spacing={{ xs: 2, sm: 3 }}>
      <Grid item xs={12} md={6}>
        <Category
          {...firstCategory}
          skeleton={isLoading}
          renderActionButton={handleRenderActionButton}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={{ xs: 2, sm: 3 }}>
          <Grid item xs={12} md={12}>
            <Category
              {...secondCategory}
              skeleton={isLoading}
              variant="secondary"
              renderActionButton={handleRenderActionButton}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Category
              {...thirdCategory}
              skeleton={isLoading}
              variant="secondary"
              renderActionButton={handleRenderActionButton}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}