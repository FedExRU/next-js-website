import { SubscribeFormData } from './types'

export const initialValues: SubscribeFormData = {
  email: '',
}

export enum Errors {
  IncorrectEmail = 'Your email is incorrect',
  EmailIsEmpty = 'Please, enter your email address',
}
