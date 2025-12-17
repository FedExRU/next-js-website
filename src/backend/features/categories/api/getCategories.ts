import { db, ICategory } from '@backend/shared/db'
import {
  ICategoryContract,
  IRequestCategoriesContract,
  IResultRowsContract,
} from '@common/interfaces'

export async function getCategories({
  all,
  limit = 2,
  offset = 0,
}: IRequestCategoriesContract): Promise<
  IResultRowsContract<ICategoryContract>
> {
  const categoriesQuery = db.raw(
    `
          WITH filtered_categories AS (
            SELECT
              categories.id,
              categories.name
            FROM categories  
            WHERE categories.disabled_at IS NULL
            AND categories.deleted_at IS NULL
          )
          SELECT
            *,
            (SELECT COUNT(*) FROM filtered_categories) as total
          FROM filtered_categories
          ORDER BY id DESC
          ${all ? '' : 'LIMIT :limit OFFSET :offset'}
        `,
    { limit, offset },
  )

  const result = await categoriesQuery
  const total = result.rows.length > 0 ? parseInt(result.rows[0].total) : 0

  const categories: ICategoryContract[] = result.rows.reduce(
    (accumulator: ICategoryContract[], category: ICategory) => {
      accumulator.push({
        id: category.id,
        name: category.name,
      })

      return accumulator
    },
    [],
  )

  return { rows: categories, total }
}
