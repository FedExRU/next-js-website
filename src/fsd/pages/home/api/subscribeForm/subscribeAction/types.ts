import { BaseActionResponse } from '@fsd/shared/lib'

import { SubscribeFormStatus } from './constants'

export type SubscribeResponse = BaseActionResponse<{
  email: string
  status: SubscribeFormStatus
}>
