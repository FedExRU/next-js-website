import type { EntityWithSkeleton } from '@fsd/shared/lib'

import { ISocialNetwork } from '../../../../api'

export type GetStylesProps = Pick<SocialNetworkItemProps, 'skeletonColor'>

export type SocialNetworkItemProps = EntityWithSkeleton &
  Partial<ISocialNetwork>
