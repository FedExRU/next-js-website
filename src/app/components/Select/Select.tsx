'use client'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import MuiSelect from '@mui/material/Select'
import { FC } from 'react'

import { SelectProps } from './types'

export const Select: FC<SelectProps> = ({
  id,
  items,
  label,
  labelId,
  onChange,
  placeholder,
  value,
}) => (
  <FormControl>
    {label && <InputLabel id={labelId}>{label}</InputLabel>}
    <MuiSelect id={id} labelId={labelId} onChange={onChange} value={value}>
      {placeholder && (
        <MenuItem disabled value="">
          {placeholder}
        </MenuItem>
      )}
      {items?.map(({ label, value }) => (
        <MenuItem key={value?.toString()} value={value}>
          {label}
        </MenuItem>
      ))}
    </MuiSelect>
  </FormControl>
)
