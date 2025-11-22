import { db, IPage } from '@backend/shared/db'
import { IPageContract } from '@common/interfaces'

export async function getPageByPath(path: string): Promise<IPageContract> {
  const normalizedPath = path[0] === '/' ? path : `/${path}`

  const page = (await db
    .select('*')
    .from('pages')
    .where('path', normalizedPath)
    .first()) as IPage

  async function getParents(
    pageId: null | number,
    parents: IPageContract[] = [],
  ): Promise<IPageContract[]> {
    if (!pageId) {
      return parents
    }

    const parent = (await db
      .select('*')
      .from('pages')
      .where('id', pageId)
      .first()) as IPage

    if (!parent) {
      return parents
    }

    const parentContract: IPageContract = {
      code: parent.code,
      description: parent.description,
      id: parent.id,
      metaDescription: parent.metaDescription,
      metaKeywords: parent.metaKeywords,
      metaTitle: parent.metaTitle,
      name: parent.name,
      parent: null,
      path: parent.path,
      shortName: parent.short_name,
    }

    return getParents(parent.parent_id, [parentContract, ...parents])
  }

  const parents = await getParents(page.parent_id)

  const pageContract: IPageContract = {
    code: page.code,
    description: page.description,
    id: page.id,
    metaDescription: page.metaDescription,
    metaKeywords: page.metaKeywords,
    metaTitle: page.metaTitle,
    name: page.name,
    parent: parents.length > 0 ? parents[0] : null,
    path: page.path,
    shortName: page.short_name,
  }

  for (let i = 0; i < parents.length - 1; i++) {
    parents[i].parent = parents[i + 1]
  }

  return pageContract
}
