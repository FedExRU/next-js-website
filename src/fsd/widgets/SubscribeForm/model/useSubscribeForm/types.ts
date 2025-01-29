import { FormEvent, RefObject } from 'react'

import { SubscribeResponse } from '../../api'

export type UseSubscribeFormReturnProps = {
  action: (payload: FormData) => void
  error: null | string
  formRef: RefObject<HTMLFormElement | null>
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
  inputRef: RefObject<HTMLInputElement | null>
  resetError: () => void
  state: SubscribeResponse
}
