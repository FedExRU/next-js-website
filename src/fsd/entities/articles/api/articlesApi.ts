import { query } from '@fsd/shared/api'

import { IArticle } from './types'

export class ArticlesApi {
  static getNew = async () => {
    const data = await query<IArticle>('articles')

    return {
      ...data,
      items: data.items.filter(article => article.isNew),
    }
  }
}
