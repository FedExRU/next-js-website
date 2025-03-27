'use client'

import { EnvelopeIcon, Typography } from '@fsd/shared'
import { Box, FormControl, FormHelperText, TextField } from '@mui/material'
import * as React from 'react'

import { useSubscribeForm } from '../../model'
import { SubmitButton } from './components'
import { getStyles } from './styles'

const { styles } = getStyles()

export const SubscribeForm: React.FC = () => {
  const {
    action,
    error,
    formRef,
    handleSubmit,
    inputRef,
    resetError,
    state: { email, message, success } = {},
  } = useSubscribeForm()

  const formHelperTextHint = React.useId()

  const hasError = !success || !!error

  return (
    <Box sx={styles.subscribeForm}>
      <Box sx={styles.subscribeFormContent}>
        <Typography
          align="center"
          component="h5"
          sx={styles.title}
          variant={{ sm: 'h4', xs: 'h6' }}
        >
          Join Our Newsletter
        </Typography>
        <Typography
          align="center"
          component="p"
          variant={{ sm: 'hairline1', xs: 'caption1' }}
        >
          Sign up for deals, new products and promotions
        </Typography>
        <Box
          action={action}
          component="form"
          noValidate
          onSubmit={handleSubmit}
          ref={formRef}
          sx={styles.form}
        >
          <FormControl error={hasError}>
            <TextField
              slotProps={{
                input: {
                  defaultValue: email,
                  endAdornment: <SubmitButton />,
                  error: hasError,
                  id: 'email',
                  inputProps: {
                    'aria-describedby': formHelperTextHint,
                    'aria-label': 'Email Address',
                  },
                  inputRef,
                  name: 'email',
                  onChange: resetError,
                  placeholder: 'Email Address',
                  required: true,
                  size: 'medium',
                  startAdornment: <EnvelopeIcon />,
                  type: 'email',
                },
              }}
              variant="standard"
            />
            <FormHelperText id={formHelperTextHint} sx={{ minHeight: 22 }}>
              {(!success && message) || error}
            </FormHelperText>
          </FormControl>
        </Box>
      </Box>
    </Box>
  )
}
