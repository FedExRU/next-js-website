import { ReactElement } from 'react'
import { ICategory } from '../api'
import { EntityWithSkeleton, LayoutVariant } from '@fsd/shared'

export type CategoryProps = Partial<ICategory> &
  EntityWithSkeleton & {
    variant?: LayoutVariant
    renderActionButton?: () => ReactElement
  }
