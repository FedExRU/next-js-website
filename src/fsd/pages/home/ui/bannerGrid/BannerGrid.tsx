'use client'

import { useGetCategoriesQuery } from '@fsd/entities/categories'
import { GoToCategory } from '@fsd/features/categories'
import { LAYOUT } from '@fsd/shared/lib'
import { Grid } from '@mui/material'

import { BannerCategory } from './bannerCategory'

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
        <BannerCategory
          {...firstCategory}
          renderAction={handleRenderAction}
          skeleton={isLoading}
        />
      </Grid>
      <Grid size={{ md: 6, xs: 12 }}>
        <Grid container spacing={{ sm: 3, xs: 2 }}>
          <Grid size={12}>
            <BannerCategory
              {...secondCategory}
              layout={LAYOUT.SECONDARY}
              renderAction={handleRenderAction}
              skeleton={isLoading}
            />
          </Grid>
          <Grid size={12}>
            <BannerCategory
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
