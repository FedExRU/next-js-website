import { EntityWithView } from '@fsd/shared/lib'

export type GetSiteSearchStylesProps = Pick<SiteSearchProps, 'view'> & {
  isOpen?: boolean
}

export type SearchForm = {
  term?: string
}

export type SiteSearchProps = EntityWithView
