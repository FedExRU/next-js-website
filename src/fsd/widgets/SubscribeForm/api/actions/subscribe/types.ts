import { BaseActionResponse } from '@fsd/shared'

import { SubscribeFormStatus } from './constants'

export type SubscribeResponse = BaseActionResponse<{
  email: string
  status: SubscribeFormStatus
}>
