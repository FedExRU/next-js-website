import { type IPageContract } from '@common/interfaces'
import { type PageBreadcrumb } from '@frontend/shared/ui'

export type UseBreadcrumbsProps = {
  page: IPageContract
}

export type UseBreadcrumbsReturnProps = {
  breadcrumbs: PageBreadcrumb[]
}
