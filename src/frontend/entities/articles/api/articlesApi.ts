import { query } from '../../../shared/api'
import { IArticle } from './types'

export class ArticlesApi {
  static readonly getNew = async () => {
    const data = await query<IArticle>('articles')

    return {
      ...data,
      items: data.items.filter(article => article.isNew),
    }
  }
}
