import { EntityWithSkeleton } from '@fsd/shared'

import { IAdvantage } from '../../api'

export type AdvantageProps = EntityWithSkeleton &
  Pick<IAdvantage, 'description' | 'title'> & {
    icon?: React.ReactNode
  }
