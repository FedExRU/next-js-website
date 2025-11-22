'use client'

import { FilterIcon, Typography } from '@frontend/shared/ui'
import Grid from '@mui/material/Grid'
import React from 'react'

import { useLayoutContext } from '../contexts'
import { ProductCategoriesFilterProps } from './productCategoriesFilter'
import { ProductDynamicFilter } from './productDynamicFilter'
import { ProductFilterDrawer } from './productFilterDrawer'
import { FilterFormField, ProductsFilterFormProps } from './types'

export const ProductsFilterForm = <
  TComponentProps extends Record<string, unknown>,
>({
  fields,
  filterValuesCount = 0,
  values,
}: ProductsFilterFormProps<TComponentProps>) => {
  const { layout } = useLayoutContext()

  const isGridSmall = layout === 'grid-small'

  const [categoriesFilter, priceFilter, ...restFields] = fields

  const { Component: CategoriesFilterComponent, ...restCategoriesProps } =
    categoriesFilter as FilterFormField<ProductCategoriesFilterProps>

  const filtersJsx = restFields.map(({ id, name, ...rest }) => {
    let key = id

    if (!Array.isArray(name)) {
      key = name
    }

    const filterValues = Array.isArray(values[key])
      ? (values[key] as string[])
      : [values[key] as string]

    return (
      <Grid key={id} size={12}>
        <ProductDynamicFilter
          id={id}
          name={name}
          {...rest}
          values={filterValues}
        />
      </Grid>
    )
  })

  return (
    <Grid container spacing={4}>
      <React.Activity mode={isGridSmall ? 'visible' : 'hidden'}>
        <Grid size={12}>
          <Typography icon={<FilterIcon />} variant="body1Semi">
            Filter
          </Typography>
        </Grid>
      </React.Activity>
      <Grid size={12}>
        <Grid container spacing={2}>
          <Grid size={isGridSmall ? 12 : 5}>
            {CategoriesFilterComponent && (
              <CategoriesFilterComponent
                {...restCategoriesProps}
                name={restCategoriesProps.name as string}
                value={values.categoryId}
              />
            )}
          </Grid>
          <Grid size={isGridSmall ? 12 : 6}>
            <ProductDynamicFilter {...priceFilter} values={values.price} />
          </Grid>
          <React.Activity mode={isGridSmall ? 'hidden' : 'visible'}>
            <Grid alignSelf="flex-end" size={1}>
              <ProductFilterDrawer count={filterValuesCount}>
                <Grid container spacing={3}>
                  {filtersJsx}
                </Grid>
              </ProductFilterDrawer>
            </Grid>
          </React.Activity>
          <React.Activity mode={isGridSmall ? 'visible' : 'hidden'}>
            {filtersJsx}
          </React.Activity>
        </Grid>
      </Grid>
    </Grid>
  )
}
