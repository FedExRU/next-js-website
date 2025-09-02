import type { EntityWithLayout, EntityWithSkeleton } from '@fsd/shared/lib'

import { ISocialNetwork } from '../../api'

export type GetStylesProps = Pick<SocialNetworkListItemProps, 'layout'>

export type SocialNetworkListItemProps = EntityWithLayout &
  EntityWithSkeleton &
  Partial<ISocialNetwork>
