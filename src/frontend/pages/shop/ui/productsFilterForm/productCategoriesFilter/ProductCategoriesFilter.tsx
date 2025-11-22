import { ANY_CATEGORY_VALUE } from '@common/constants'
import { useDebounce } from '@frontend/shared/lib'
import React from 'react'

import { fireUpdateCategoryTitleEvent } from '../../../lib'
import { useFormContext, useLayoutContext } from '../../contexts'
import { CATEGORIES_LABEL } from './constants'
import { ProductCategoryFilterAutocomplete } from './productCategoryFilterAutocomplete'
import { ProductCategoryFilterRadio } from './productCategoryFilterRadio'
import { ProductCategoriesFilterProps } from './types'

export const ProductCategoriesFilter: React.FC<
  ProductCategoriesFilterProps
> = ({
  name,
  onChange,
  options,
  value: valueProp = String(ANY_CATEGORY_VALUE),
}) => {
  const { layout } = useLayoutContext()
  const { handleSubmit } = useFormContext()
  const [value, setValue] = React.useState(valueProp)

  const isSmallGrid = layout === 'grid-small'

  const handleSubmitDebounced = useDebounce(
    (valueObject?: { id: number | string; value: string }) => {
      console.log(valueObject)
      fireUpdateCategoryTitleEvent(valueObject?.value || '')
      handleSubmit()
    },
    isSmallGrid ? 300 : 0,
  )

  const baseProps = {
    label: CATEGORIES_LABEL,
    name,
    options,
    value,
  }

  const handleChangeCategoryRadio = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
    valueObject?: { id: number | string; value: string },
  ) => {
    setValue(value)
    onChange(event)
    handleSubmitDebounced(valueObject)
  }

  const handleChangeCategoryAutocomplete = (
    _: React.SyntheticEvent,
    value: { id: number | string; value: string },
    valueObject?: { id: number | string; value: string },
  ) => {
    const categoryId = String(value?.id)
    setValue(categoryId)
    onChange({
      target: {
        name,
        value: categoryId ?? '',
      },
    } as React.ChangeEvent<HTMLInputElement>)
    handleSubmitDebounced(valueObject)
  }

  if (options?.length === 0) return null

  if (isSmallGrid) {
    return (
      <ProductCategoryFilterRadio
        {...baseProps}
        onChange={handleChangeCategoryRadio}
      />
    )
  }

  return (
    <ProductCategoryFilterAutocomplete
      {...baseProps}
      onChange={handleChangeCategoryAutocomplete}
    />
  )
}
