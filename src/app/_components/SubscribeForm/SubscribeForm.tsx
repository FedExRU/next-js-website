'use client'

import React, { FC, FormEvent, useCallback } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import { useFormState, useFormStatus } from 'react-dom'
import { useFormik } from 'formik'
import { initialState, initialValues } from './constants'
import { SubscribeFormData } from './types'
import { EnvelopeIcon } from 'components/Icons'
import { sendEmail, validationSchema } from 'server-actions/subscribe-form'
import { ServerActionResponse } from 'server-actions/index'

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      variant="text"
      disabled={pending}
      sx={{
        borderBottom: 'none',
        color: pending ? 'red' : 'text.secondary',
        '&:hover': { color: 'text.primary' },
        '&:focus': { color: 'text.primary' },
      }}
    >
      Signup
    </Button>
  )
}

export const SubscribeForm: FC = () => {
  const [state, formAction] = useFormState<ServerActionResponse, FormData>(
    sendEmail,
    initialState,
  )

  const { isValid, errors, handleChange, values } =
    useFormik<SubscribeFormData>({
      initialValues,
      validationSchema,
      onSubmit: () => {},
    })

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      if (isValid) {
        return
      }
      event.stopPropagation()
      event.preventDefault()
    },
    [isValid],
  )

  return (
    <form noValidate action={formAction} onSubmit={handleSubmit}>
      <FormControl error={!state.success || !isValid}>
        <TextField
          variant="standard"
          slotProps={{
            input: {
              name: 'email',
              value: values.email,
              onChange: handleChange,
              size: 'medium',
              error: !state.success || !isValid,
              type: 'email',
              placeholder: 'Email Address',
              startAdornment: <EnvelopeIcon />,
              inputProps: {
                'aria-describedby': 'signup-email-error-text',
                'aria-label': 'Email Address',
              },
              endAdornment: <SubmitButton />,
            },
          }}
        />
        <FormHelperText id="signup-email-error-text" sx={{ minHeight: 22 }}>
          {errors?.email || (!state.success && state.message)}
        </FormHelperText>
      </FormControl>
    </form>
  )
}
