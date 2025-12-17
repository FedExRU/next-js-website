import { PageBreadcrumb } from '@frontend/shared/ui'
import React from 'react'

import type { UseBreadcrumbsProps, UseBreadcrumbsReturnProps } from './types'

export const useBreadcrumbs = ({
  page,
}: UseBreadcrumbsProps): UseBreadcrumbsReturnProps => {
  const { name, parent, path, shortName } = page
  const breadcrumbs = React.useMemo(() => {
    const data: PageBreadcrumb[] = []
    let parentData = parent

    while (parentData) {
      data.push({
        name: parentData.shortName ?? parentData.name,
        path: parentData.path,
      })

      parentData = parentData.parent
    }

    data.push({
      name: shortName ?? name,
      path,
    })

    return data
  }, [])

  return {
    breadcrumbs,
  }
}
