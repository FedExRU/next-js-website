'use client'

import { Category, useGetCategoriesQuery } from '@fsd/entities/Categories'
import { GoToCategory } from '@fsd/features'
import { LAYOUT } from '@fsd/shared'
import { Grid2 as Grid } from '@mui/material'

export const BannerGrid: React.FC = () => {
  const {
    data: { items: [firstCategory, secondCategory, thirdCategory] } = {
      items: [],
    },
    isLoading,
  } = useGetCategoriesQuery({
    limit: 3,
    orderBy: {
      direction: 'desc',
      field: 'updatedAt',
    },
  })

  const handleRenderAction = () => <GoToCategory skeleton={isLoading} />

  return (
    <Grid container spacing={{ sm: 3, xs: 2 }}>
      <Grid size={{ md: 6, xs: 12 }}>
        <Category
          {...firstCategory}
          renderAction={handleRenderAction}
          skeleton={isLoading}
        />
      </Grid>
      <Grid size={{ md: 6, xs: 12 }}>
        <Grid container spacing={{ sm: 3, xs: 2 }}>
          <Grid size={12}>
            <Category
              {...secondCategory}
              layout={LAYOUT.SECONDARY}
              renderAction={handleRenderAction}
              skeleton={isLoading}
            />
          </Grid>
          <Grid size={12}>
            <Category
              {...thirdCategory}
              layout={LAYOUT.SECONDARY}
              renderAction={handleRenderAction}
              skeleton={isLoading}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
