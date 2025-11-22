import { ANY_CATEGORY_VALUE } from '@common/constants'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import RadioGroup from '@mui/material/RadioGroup'
import React from 'react'

import { ANY_CATEGORY_TITLE } from '../constants'
import { ProductCategoryItem } from './productCategoryItem'
import { getStyles } from './styles'
import { ProductCategoryFilterRadioProps } from './types'

const { styles } = getStyles()

export const ProductCategoryFilterRadio: React.FC<
  ProductCategoryFilterRadioProps
> = ({ label, name, onChange, options, value }) => {
  const changedValueRef = React.useRef<
    | undefined
    | {
        id: number | string
        value: string
      }
  >(undefined)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    onChange?.(event, value, changedValueRef.current)
  }

  const makeHandleItemClick =
    (
      item:
        | undefined
        | {
            id: number | string
            value: string
          },
    ) =>
    () => {
      changedValueRef.current = item
    }

  return (
    <Box>
      <FormControl component="fieldset" sx={styles.formControl}>
        <InputLabel component="legend" focused sx={styles.inputLabel}>
          {label}
        </InputLabel>
        <RadioGroup
          onChange={handleChange}
          sx={styles.categoriesList}
          value={value}
        >
          <ProductCategoryItem
            isActive={String(value) === String(ANY_CATEGORY_VALUE)}
            label={ANY_CATEGORY_TITLE}
            name={name ?? ''}
            onClick={makeHandleItemClick(undefined)}
            value={ANY_CATEGORY_VALUE}
          />
          {options?.map(({ id, value: label }) => (
            <ProductCategoryItem
              isActive={value === String(id)}
              key={id}
              label={label}
              name={name ?? ''}
              onClick={makeHandleItemClick({ id, value: label })}
              value={id}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  )
}
