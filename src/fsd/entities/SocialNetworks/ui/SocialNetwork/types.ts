import { EntityWithSkeleton } from '@fsd/shared'

import { ISocialNetwork } from '../../api'

export type GetStylesProps = Pick<SocialNetworkProps, 'skeletonColor'>

export type SocialNetworkProps = EntityWithSkeleton & Partial<ISocialNetwork>
