import { BaseActionResponse } from '../../../../../shared/lib'
import { SubscribeFormStatus } from './constants'

export type SubscribeResponse = BaseActionResponse<{
  email: string
  status: SubscribeFormStatus
}>
