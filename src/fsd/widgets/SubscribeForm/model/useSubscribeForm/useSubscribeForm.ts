import { subscribe, SubscribeResponse } from '@fsd/shared'
import { useFormik } from 'formik'
import { useActionState } from 'react'

import { initialFormState, initialValues } from './constants'
import { SubscribeFormData, UseSubscribeFormReturnProps } from './types'
import { validationSchema } from './validationSchema'

export const useSubscribeForm = (): UseSubscribeFormReturnProps => {
  const [state, formAction] = useActionState<SubscribeResponse, FormData>(
    subscribe,
    initialFormState,
  )

  const { errors, handleChange, isValid, values } =
    useFormik<SubscribeFormData>({
      initialValues,
      onSubmit: () => {},
      validationSchema,
    })

  return {
    errors,
    formAction,
    handleChange,
    isValid,
    state,
    values,
  }
}
