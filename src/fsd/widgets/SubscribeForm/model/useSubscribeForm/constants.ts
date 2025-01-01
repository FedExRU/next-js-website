import { SubscribeFormData } from './types'
import { SubscribeResponse } from '@fsd/shared'

export enum Errors {
  IncorrectEmail = 'Your email is incorrect',
  EmailIsEmpty = 'Please, enter your email address',
}

export const initialFormState: SubscribeResponse = {
  code: 0,
  message: '',
  success: true,
}

export const initialValues: SubscribeFormData = {
  email: '',
}
