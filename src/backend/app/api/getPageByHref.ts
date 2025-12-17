import { getPageByPath } from '@backend/features/pages'

export const getPageByHref = (href: string) => {
  return getPageByPath(href)
}
