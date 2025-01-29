import { macroTask } from '@fsd/shared'
import { useActionState, useEffect, useRef, useState } from 'react'

import {
  subscribe,
  SubscribeFormErrors,
  SubscribeFormStatus,
  SubscribeResponse,
} from '../../api'
import { initialFormState } from './constants'
import { UseSubscribeFormReturnProps } from './types'

export const useSubscribeForm = (): UseSubscribeFormReturnProps => {
  const [state, action] = useActionState<SubscribeResponse, FormData>(
    subscribe,
    initialFormState,
  )
  const [formKey, setFormKey] = useState(0)

  const inputRef = useRef<HTMLInputElement>(null)

  /**
   * Validating the form by the user input with the `validity` API.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
   */
  const validate = () => {
    const input = inputRef.current

    if (!input) {
      return
    }

    if (input.validity.typeMismatch) {
      return input.setCustomValidity(SubscribeFormErrors.IncorrectEmail)
    }

    if (input.validity.valueMissing) {
      return input.setCustomValidity(SubscribeFormErrors.EmailIsEmpty)
    }

    return input.setCustomValidity('')
  }

  /**
   * Resetting the form with a new key.
   *
   * @see https://react.dev/learn/preserving-and-resetting-state#resetting-a-form-with-a-key
   */
  useEffect(() => {
    if (state.status === SubscribeFormStatus.Idle) {
      return validate()
    }

    if (state.status !== SubscribeFormStatus.Success) {
      return
    }

    setFormKey(prev => prev + 1)
    macroTask(() => inputRef.current?.blur())
    console.log('ready!')
  }, [state.status])

  return {
    action,
    formKey,
    inputRef,
    state,
    validate,
  }
}
