'use client'

import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import { EnvelopeIcon } from 'components/Icons'
import { useFormik } from 'formik'
import React, { FC, FormEvent, useActionState, useCallback } from 'react'
import { useFormStatus } from 'react-dom'
import { ServerActionResponse } from 'server-actions/index'
import { sendEmail, validationSchema } from 'server-actions/subscribe-form'

import { initialState, initialValues } from './constants'
import { SubscribeFormData } from './types'

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <Button
      disabled={pending}
      sx={{
        '&:focus': { color: 'text.primary' },
        '&:hover': { color: 'text.primary' },
        borderBottom: 'none',
        color: pending ? 'red' : 'text.secondary',
      }}
      type="submit"
      variant="text"
    >
      Signup
    </Button>
  )
}

export const SubscribeForm: FC = () => {
  const [state, formAction] = useActionState<ServerActionResponse, FormData>(
    sendEmail,
    initialState,
  )

  const { errors, handleChange, isValid, values } =
    useFormik<SubscribeFormData>({
      initialValues,
      onSubmit: () => {},
      validationSchema,
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
    <form action={formAction} noValidate onSubmit={handleSubmit}>
      <FormControl error={!state.success || !isValid}>
        <TextField
          slotProps={{
            input: {
              endAdornment: <SubmitButton />,
              error: !state.success || !isValid,
              inputProps: {
                'aria-describedby': 'signup-email-error-text',
                'aria-label': 'Email Address',
              },
              name: 'email',
              onChange: handleChange,
              placeholder: 'Email Address',
              size: 'medium',
              startAdornment: <EnvelopeIcon />,
              type: 'email',
              value: values.email,
            },
          }}
          variant="standard"
        />
        <FormHelperText id="signup-email-error-text" sx={{ minHeight: 22 }}>
          {errors?.email || (!state.success && state.message)}
        </FormHelperText>
      </FormControl>
    </form>
  )
}
