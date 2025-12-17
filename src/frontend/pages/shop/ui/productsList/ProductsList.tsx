'use client'

import {
  Product,
  useGetProductsInfiniteQuery,
} from '@frontend/entities/products'
import { AddToCart } from '@frontend/features/products'
import { InfiniteScrollBlock } from '@frontend/shared/ui'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useInView } from 'react-intersection-observer'

import { useLayoutContext } from '../contexts'
import { GRID_SIZE_BY_LAYOUT } from './constants'
import { ProductsLayoutSwitcher } from './productsLayoutSwitcher'
import { ProductsLoader } from './productsLoader'
import { ProductsSort } from './productsSort'
import { ProductsListProps } from './types'

export const ProductsList: React.FC<ProductsListProps> = ({
  currentCategoryName,
  onSortChange,
  sortItems,
  sortName,
  sortValue,
  toolbarJsx,
}) => {
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useGetProductsInfiniteQuery()

  const handleRenderAction = () => <AddToCart />

  const { inView: inViewFirstSkeleton, ref: firstSkeletonRef } = useInView()

  const { layout } = useLayoutContext()

  const gridSize = GRID_SIZE_BY_LAYOUT[layout]

  const isGridSmall = layout === 'grid-small'

  const hasCustomFilters = !!toolbarJsx

  return (
    <Grid container spacing={5}>
      <Grid size={12}>
        <Grid container justifyContent="space-between">
          <Grid size={isGridSmall ? 'auto' : 6}>
            <React.Activity mode={hasCustomFilters ? 'visible' : 'hidden'}>
              {toolbarJsx}
            </React.Activity>
            {!hasCustomFilters && (
              <Typography variant="body1Semi">{currentCategoryName}</Typography>
            )}
          </Grid>
          <Grid
            alignSelf={isGridSmall ? 'flex-start' : 'flex-end'}
            size={isGridSmall ? 'auto' : 6}
          >
            <Grid
              container
              justifyContent={isGridSmall ? 'flex-start' : 'flex-end'}
              spacing={4}
            >
              <Grid size="auto">
                <ProductsSort
                  name={sortName}
                  onChange={onSortChange}
                  sortItems={sortItems}
                  value={sortValue}
                />
              </Grid>
              <Grid size="auto">
                <ProductsLayoutSwitcher />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <InfiniteScrollBlock
          hasAltCondition={inViewFirstSkeleton}
          hasData={hasNextPage}
          onRichEnd={fetchNextPage}
        >
          <Grid container spacing={3}>
            {isLoading && <ProductsLoader size={gridSize} />}
            {data?.pages.map(page =>
              page.data.data.rows.map(
                ({
                  discountPercentage,
                  discountPrice,
                  id,
                  imageLarge,
                  name,
                  new: isNew,
                  price,
                }) => (
                  <Grid key={id} size={gridSize}>
                    <Product
                      discountPercentage={discountPercentage}
                      discountPrice={discountPrice}
                      image={imageLarge ?? ''}
                      isNew={isNew}
                      name={name}
                      price={price}
                      renderAction={handleRenderAction}
                    />
                  </Grid>
                ),
              ),
            )}
            {hasNextPage && (
              <ProductsLoader firstSkeletonRef={firstSkeletonRef} />
            )}
          </Grid>
        </InfiniteScrollBlock>
      </Grid>
    </Grid>
  )
}
