import { RefObject } from 'react'

import { SubscribeResponse } from '../../api'

export type UseSubscribeFormReturnProps = {
  action: (payload: FormData) => void
  formKey: number
  inputRef: RefObject<HTMLInputElement | null>
  state: SubscribeResponse
  validate: () => void
}
