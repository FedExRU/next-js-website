import { ServerActionResponse } from 'server-actions/types'

import { SubscribeFormData } from './types'

export const initialState: ServerActionResponse = {
  code: 0,
  message: '',
  success: true,
}

export const initialValues: SubscribeFormData = {
  email: '',
}
