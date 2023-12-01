'use client'

import { FC } from 'react'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import MuiSelect from '@mui/material/Select'
import { SelectProps } from './types'

const Select: FC<SelectProps> = ({
  items,
  value,
  id,
  labelId,
  onChange,
  label,
  placeholder,
}) => (
  <FormControl>
    {label && <InputLabel id={labelId}>{label}</InputLabel>}
    <MuiSelect labelId={labelId} id={id} value={value} onChange={onChange}>
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

export default Select
