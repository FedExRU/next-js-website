import type { EntityWithSkeleton } from '../../../../../shared/lib'

import { IAdvantage } from '../../../api'

export type AdvantageProps = EntityWithSkeleton & Partial<IAdvantage>
