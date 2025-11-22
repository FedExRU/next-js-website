import { Autocomplete } from '@mui/material'
import TextField from '@mui/material/TextField'
import React from 'react'

import { DictionaryValue, ProductFilterDictionaryProps } from './types'

export const ProductFilterDictionary: React.FC<
  ProductFilterDictionaryProps
> = ({ label, name, onChange, options = [], value }) => {
  const handleChange = (
    _: React.SyntheticEvent,
    value: DictionaryValue | null,
  ) => {
    onChange({
      target: {
        name,
        value: value?.id ? String(value.id) : '',
      },
    } as React.ChangeEvent<HTMLInputElement>)
  }

  return (
    <Autocomplete
      disablePortal
      getOptionKey={value => value.id}
      getOptionLabel={value => value.value}
      onChange={handleChange}
      options={options}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          name={name}
          placeholder="Enter a value..."
          size="small"
          slotProps={{
            inputLabel: {
              focused: true,
            },
          }}
        />
      )}
      value={options.find(({ id }) => String(id) === String(value)) ?? null}
    />
  )
}
