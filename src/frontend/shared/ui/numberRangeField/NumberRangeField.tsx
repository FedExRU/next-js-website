import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import React from 'react'

import { NumberField } from '../numberField'
import { NumberRangeFieldProps } from './types'

export const NumberRangeField: React.FC<NumberRangeFieldProps> = ({
  inputEndProps,
  inputStartProps,
  label,
}) => {
  return (
    <FormControl component="fieldset">
      <InputLabel component="legend" focused size="small">
        {label}
      </InputLabel>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
        }}
      >
        <NumberField
          fullWidth
          placeholder="From..."
          size="small"
          slotProps={{
            htmlInput: { 'aria-label': `${label} from`, min: 0 },
            inputLabel: { component: 'span' },
          }}
          {...inputStartProps}
        />
        <NumberField
          fullWidth
          placeholder="To..."
          size="small"
          slotProps={{
            htmlInput: { 'aria-label': `${label} to`, min: 0 },
            inputLabel: { component: 'span' },
          }}
          {...inputEndProps}
        />
      </Box>
    </FormControl>
  )
}
