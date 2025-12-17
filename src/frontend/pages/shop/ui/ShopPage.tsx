'use client'

import { PageBreadcrumbs } from '@frontend/shared/ui'
import { useBreadcrumbs } from '@frontend/widgets/breadcrumbs'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { useFormik } from 'formik'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

import { subscribeUpdateCategoryTitleEvent } from '../lib'
import placeholderImage from './assets/shop-page-placeholder.webp'
import { SORT_ITEMS } from './constants'
import {
  FormContext,
  LayoutContextProvider,
  useLayoutContext,
} from './contexts'
import {
  ANY_CATEGORY_TITLE,
  buildForm,
  ProductsFilterForm,
} from './productsFilterForm'
import { ProductsList } from './productsList'
import { getStyles } from './styles'
import { FormFilters, ShopPageProps } from './types'
import { getDynamicFiltersValuesCount } from './utils'

const { styles } = getStyles()

const _ShopPage: React.FC<ShopPageProps> = ({
  attributeDictionaryValues,
  attributes,
  categories,
  colors,
  page,
}) => {
  const { description, name } = page
  const { breadcrumbs } = useBreadcrumbs({ page })
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathName = usePathname()

  const { layout } = useLayoutContext()
  const [currentCategoryName, setCurrentCategoryName] = React.useState(() => {
    const categoryId = parseInt(
      searchParams.get('categoryId')
        ? JSON.parse(searchParams.get('categoryId') as string)
        : '',
    )
    let categoryName: string | undefined = ''

    if (categoryId) {
      categoryName = categories.rows.find(({ id }) => id === categoryId)?.name
    }

    return categoryName || ANY_CATEGORY_TITLE
  })

  const [dynamicFilterValuesCount, setDynamicFilterValuesCount] =
    React.useState(0)

  const isGridSmall = layout === 'grid-small'

  const handleSubmitForm = (values: FormFilters) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { limit, sort, ...valuesToCount } = values
    const filterFields = Object.keys(valuesToCount)

    const newSearchParams = new URLSearchParams(
      filterFields.length ? searchParams.toString() : '',
    )

    filterFields.forEach(fieldName => {
      if (
        !valuesToCount[fieldName] ||
        (!Array.isArray(valuesToCount[fieldName]) &&
          parseInt(valuesToCount[fieldName]) === 0) ||
        (Array.isArray(valuesToCount[fieldName]) &&
          (!valuesToCount[fieldName].length ||
            (!valuesToCount[fieldName][0] && !valuesToCount[fieldName][1])))
      ) {
        newSearchParams.delete(fieldName)
      } else {
        let value = valuesToCount[fieldName]

        if (Array.isArray(value)) {
          value = value.map(v => (v === undefined ? '' : v))
        }
        newSearchParams.set(fieldName, JSON.stringify(value))
      }
    })

    if (sort) {
      newSearchParams.set('sort', JSON.stringify(sort))
    }

    router.replace(`${pathName}?${newSearchParams.toString()}`, {
      scroll: false,
    })
  }

  const getInitialValues = (): FormFilters => {
    const initialValues = {} as FormFilters
    if (!searchParams.size) {
      return initialValues
    }

    for (const [key, value] of searchParams) {
      initialValues[key] = JSON.parse(value)
    }

    return initialValues
  }

  const { handleChange, handleSubmit, resetForm, values } = useFormik({
    initialValues: getInitialValues() || ({} as FormFilters),
    onSubmit: handleSubmitForm,
  })

  const filterFormFields = React.useMemo(
    () =>
      buildForm({
        attributeDictionaryValues,
        attributes,
        categories: categories.rows,
        colors,
        handleChange,
      }),
    [attributeDictionaryValues, attributes, categories, colors, handleChange],
  )

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { limit, sort, ...restFormValues } = values

  const productFiltersJsx = (
    <ProductsFilterForm
      fields={filterFormFields}
      filterValuesCount={dynamicFilterValuesCount}
      values={restFormValues}
    />
  )

  const formContextValue = React.useMemo(
    () => ({
      handleSubmit,
      resetForm: () => resetForm({ values: {} as FormFilters }),
    }),
    [handleSubmit, resetForm],
  )

  React.useEffect(() => {
    setDynamicFilterValuesCount(getDynamicFiltersValuesCount(restFormValues))
  }, [restFormValues])

  React.useEffect(() => {
    const unSubscribe = subscribeUpdateCategoryTitleEvent(categoryName => {
      setCurrentCategoryName(categoryName || ANY_CATEGORY_TITLE)
    })

    return () => unSubscribe()
  }, [])

  return (
    <Container>
      <PageBreadcrumbs
        breadcrumbs={breadcrumbs}
        description={description ?? ''}
        image={placeholderImage.src}
        name={name}
      />
      <FormContext value={formContextValue}>
        <Box component="form" sx={styles.root}>
          <Grid container spacing={8}>
            <React.Activity mode={isGridSmall ? 'visible' : 'hidden'}>
              <Grid size={3}>{productFiltersJsx}</Grid>
            </React.Activity>
            <Grid size={isGridSmall ? 9 : 12}>
              <ProductsList
                currentCategoryName={currentCategoryName}
                onSortChange={handleChange}
                sortItems={SORT_ITEMS}
                sortName="sort"
                sortValue={sort}
                toolbarJsx={isGridSmall ? null : productFiltersJsx}
              />
            </Grid>
          </Grid>
        </Box>
      </FormContext>
    </Container>
  )
}

export const ShopPage: React.FC<ShopPageProps> = props => (
  <LayoutContextProvider>
    <_ShopPage {...props} />
  </LayoutContextProvider>
)
