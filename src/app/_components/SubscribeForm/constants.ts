import { SubscribeFormData } from './types'
import { ServerActionResponse } from 'server-actions/types'

export const initialState: ServerActionResponse = {
  code: 0,
  message: '',
  success: true,
}

export const initialValues: SubscribeFormData = {
  email: '',
}
