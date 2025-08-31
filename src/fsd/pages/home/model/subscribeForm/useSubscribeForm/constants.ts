import { SubscribeFormStatus, SubscribeResponse } from '../../../api'

export enum Errors {
  EmailIsEmpty = 'Please, enter your email address',
  IncorrectEmail = 'Your email is incorrect',
}

export const initialFormState: SubscribeResponse = {
  email: '',
  message: '',
  status: SubscribeFormStatus.Idle,
  success: true,
}
