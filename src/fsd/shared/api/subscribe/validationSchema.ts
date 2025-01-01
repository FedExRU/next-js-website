import * as yup from 'yup'
import { Errors } from './constants'

export const validationSchema = yup.object({
  email: yup
    .string()
    .required(Errors.EmailIsEmpty)
    .email(Errors.IncorrectEmail)
    .nonNullable(),
})
