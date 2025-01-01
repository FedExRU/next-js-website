import { useFormik } from 'formik'
import { useActionState } from 'react'
import { initialFormState, initialValues } from './constants'
import { validationSchema } from './validationSchema'
import { SubscribeFormData, UseSubscribeFormReturnProps } from './types'
import { subscribe, SubscribeResponse } from '@fsd/shared'

export const useSubscribeForm = (): UseSubscribeFormReturnProps => {
  const [state, formAction] = useActionState<SubscribeResponse, FormData>(
    subscribe,
    initialFormState,
  )

  const { isValid, errors, handleChange, values } =
    useFormik<SubscribeFormData>({
      initialValues,
      validationSchema,
      onSubmit: () => {},
    })

  return {
    isValid,
    errors,
    handleChange,
    values,
    state,
    formAction,
  }
}
