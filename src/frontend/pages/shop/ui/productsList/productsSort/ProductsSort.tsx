import { Typography } from '@frontend/shared/ui'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import React from 'react'

import { useFormContext } from '../../contexts'
import { VALUE_NONE } from './constants'
import { getStyles } from './styles'
import { ProductsSortProps } from './types'

const { styles } = getStyles()

export const ProductsSort: React.FC<ProductsSortProps> = ({
  name,
  onChange,
  sortItems = [],
  value = VALUE_NONE.value,
}) => {
  const { handleSubmit } = useFormContext()

  const id = React.useId()

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value === VALUE_NONE.value) {
      return
    }
    onChange?.(event as React.ChangeEvent<HTMLInputElement>)
    handleSubmit()
  }

  return (
    <FormControl fullWidth>
      <Select
        labelId={id}
        MenuProps={{
          slotProps: {
            paper: {
              sx: styles.paper,
            },
          },
        }}
        onChange={handleChange}
        slotProps={{
          input: {
            name,
          },
        }}
        sx={styles.select}
        value={value}
        variant="standard"
      >
        {[VALUE_NONE, ...sortItems].map(({ label, value }) => (
          <MenuItem disabled={value === VALUE_NONE.value} value={value}>
            <Typography variant="body2Semi">{label}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
