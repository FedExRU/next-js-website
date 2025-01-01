import { FormikErrors } from 'formik'
import { SubscribeResponse } from '@fsd/shared'

export type SubscribeFormData = {
  email: string
}

export type UseSubscribeFormReturnProps = {
  isValid: boolean
  errors: FormikErrors<SubscribeFormData>
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  values: SubscribeFormData
  state: SubscribeResponse
  formAction: (payload: FormData) => void
}
