import { macroTask, useActionState } from '@fsd/shared'
import { sendNotification } from '@fsd/widgets/Notifications'
import { startTransition, useEffect, useRef, useState } from 'react'

import {
  subscribe,
  SubscribeFormStatus,
  SubscribeResponse,
  validationSchema,
} from '../../api'
import { initialFormState } from './constants'
import { UseSubscribeFormReturnProps } from './types'

export const useSubscribeForm = (): UseSubscribeFormReturnProps => {
  const [state, action] = useActionState<SubscribeResponse, FormData>(
    subscribe,
    initialFormState,
  )

  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    if (state.status !== SubscribeFormStatus.Error) {
      return
    }

    sendNotification('error!!!')
  }, [state.status])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await validationSchema.validate({
        email: e.currentTarget.email.value,
      })

      startTransition(() => {
        if (e.target instanceof HTMLFormElement === false) {
          return
        }

        action(new FormData(e.target))
        formRef.current?.reset()
        macroTask(() => inputRef.current?.blur())
        sendNotification(
          'Thank you for subscribing to our newsletter! Soon, you will start receiving interesting events, information about discounts, and much more in your email!',
          {
            title: 'You have successfully joined our newsletter',
          },
        )
      })
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message)
      }
    }
  }

  const resetError = () => {
    setError('')
  }

  return {
    action,
    error,
    formRef,
    handleSubmit,
    inputRef,
    resetError,
    state,
  }
}
