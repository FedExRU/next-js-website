'use client'

import React, { FC, useEffect } from 'react'
import { useFormik } from 'formik'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import { EnvelopeIcon } from '../Icons'
import { SubscribeFormData, SubscribeFormProps } from './types'
import { Errors, initialValues } from './constants'
import { validationSchema } from './validationSchema'

const SubscribeForm: FC<SubscribeFormProps> = ({ onSubmit, disabled }) => {
  const [isValidateOnChange, setIsValidateOnChange] = React.useState(false)

  const handleSubmit = (values: SubscribeFormData) => {
    if (!values?.email) {
      setErrors({ email: Errors.EmailIsEmpty })
      return
    }
    onSubmit?.(values)
  }

  const {
    handleChange,
    values: { email },
    errors,
    isValid,
    handleSubmit: handleSubmitFormik,
    submitCount,
    setErrors,
  } = useFormik<SubscribeFormData>({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema,
    validateOnChange: isValidateOnChange,
  })

  useEffect(() => {
    if (submitCount === 1) {
      setIsValidateOnChange(true)
    }
  }, [submitCount])

  useEffect(() => {
    if (!errors?.email) {
      setErrors({})
    }
  }, [setErrors, errors?.email])

  return (
    <form noValidate onSubmit={handleSubmitFormik}>
      <FormControl error={!isValid}>
        <TextField
          variant="standard"
          InputProps={{
            name: 'email',
            'aria-describedby': 'signup-email-error-text',
            error: !isValid,
            size: 'medium',
            type: 'email',
            value: email,
            onChange: handleChange,
            disabled,
            placeholder: 'Email Address',
            startAdornment: <EnvelopeIcon />,
            endAdornment: (
              <Button
                type="submit"
                variant="text"
                sx={{
                  borderBottom: 'none',
                  color: 'text.secondary',
                  '&:hover': { color: 'text.primary' },
                  '&:focus': { color: 'text.primary' },
                }}
                disabled={disabled || !isValid}
              >
                Signup
              </Button>
            ),
          }}
        />
        <FormHelperText id="signup-email-error-text" sx={{ minHeight: 22 }}>
          {errors?.email}
        </FormHelperText>
      </FormControl>
    </form>
  )
}

export default SubscribeForm
