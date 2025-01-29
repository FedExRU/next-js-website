import * as yup from 'yup'

import { SubscribeFormErrors } from './constants'

export const validationSchema = yup.object({
  email: yup
    .string()
    .required(SubscribeFormErrors.EmailIsEmpty)
    .email(SubscribeFormErrors.IncorrectEmail)
    .nonNullable(),
})
