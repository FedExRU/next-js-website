import { SubscribeResponse } from '../../../api'

export type UseSubscribeFormReturnProps = {
  action: (payload: FormData) => void
  error: null | string
  formRef: React.RefObject<HTMLFormElement | null>
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  inputRef: React.RefObject<HTMLInputElement | null>
  resetError: () => void
  state: SubscribeResponse
}
