import { IArticle } from './types'
import { query } from '@fsd/shared'

export class ArticlesApi {
  static getNew = async () => {
    const data = await query<IArticle>('articles')

    return {
      ...data,
      items: data.items.filter(article => article.isNew),
    }
  }
}
