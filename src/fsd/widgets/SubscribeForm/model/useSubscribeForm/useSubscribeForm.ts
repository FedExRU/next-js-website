'use client'

import { useActionState } from '@fsd/shared'
import { sendNotification } from '@fsd/widgets/Notifications'
import React from 'react'

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

  const inputRef = React.useRef<HTMLInputElement>(null)
  const formRef = React.useRef<HTMLFormElement>(null)
  const [error, setError] = React.useState<null | string>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await validationSchema.validate({
        email: e.currentTarget.email.value,
      })

      React.startTransition(() => {
        if (e.target instanceof HTMLFormElement === false) {
          return
        }

        action(new FormData(e.target))
        formRef.current?.reset()
        queueMicrotask(() => inputRef.current?.blur())
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

  React.useEffect(() => {
    if (state.status !== SubscribeFormStatus.Error) {
      return
    }

    sendNotification('error!!!')
  }, [state.status])

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
