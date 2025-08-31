import type { EntityWithSkeleton } from '@fsd/shared/lib'

import { IAdvantage } from '../../../api'

export type AdvantageProps = EntityWithSkeleton & Partial<IAdvantage>
