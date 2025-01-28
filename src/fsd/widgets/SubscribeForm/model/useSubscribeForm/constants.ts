import { SubscribeResponse } from '@fsd/shared'

import { SubscribeFormData } from './types'

export enum Errors {
  EmailIsEmpty = 'Please, enter your email address',
  IncorrectEmail = 'Your email is incorrect',
}

export const initialFormState: SubscribeResponse = {
  code: 0,
  message: '',
  success: true,
}

export const initialValues: SubscribeFormData = {
  email: '',
}
