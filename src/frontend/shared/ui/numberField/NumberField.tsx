import TextField from '@mui/material/TextField'
import React from 'react'

import { NumberFieldProps } from './types'

export const NumberField: React.FC<NumberFieldProps> = React.memo(
  ({ onKeyDown, ...rest }) => {
    const inputNumberRef = React.useRef<HTMLInputElement | null>(null)

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(event)

      if (['+', '-', 'e'].includes(event.key.toLowerCase())) {
        event.preventDefault()
      }
    }

    return (
      <TextField
        {...rest}
        onKeyDown={handleKeyDown}
        slotProps={{
          ...rest.slotProps,
          htmlInput: {
            ...rest.slotProps?.htmlInput,
            ref: inputNumberRef,
          },
        }}
        type="number"
      />
    )
  },
)
