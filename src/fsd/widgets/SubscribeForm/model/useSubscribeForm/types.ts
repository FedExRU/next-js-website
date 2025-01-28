import { SubscribeResponse } from '@fsd/shared'
import { FormikErrors } from 'formik'

export type SubscribeFormData = {
  email: string
}

export type UseSubscribeFormReturnProps = {
  errors: FormikErrors<SubscribeFormData>
  formAction: (payload: FormData) => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  isValid: boolean
  state: SubscribeResponse
  values: SubscribeFormData
}
