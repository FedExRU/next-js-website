'use client'

import { Box, TextField } from '@mui/material'
import React from 'react'

import { getStyles } from './styles'
import { SiteSearchMobileProps } from './types'

export const SiteSearchMobile: React.FC<SiteSearchMobileProps> = ({
  icon,
  name,
  onChange,
  onSubmit,
  placeholder,
  value,
  ...rest
}) => {
  const { styles } = getStyles()

  return (
    <Box component="form" onSubmit={onSubmit}>
      <TextField
        fullWidth
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        slotProps={{
          input: {
            inputProps: {
              'aria-label': rest['aria-label'],
              sx: styles.input,
            },

            startAdornment: icon,
          },
        }}
        value={value}
        variant="outlined"
      />
    </Box>
  )
}
