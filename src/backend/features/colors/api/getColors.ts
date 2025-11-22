import { db, IColor } from '@backend/shared/db'
import { IColorContract, IRequestColorsContract } from '@common/interfaces'
import { IResultRowsContract } from '@common/interfaces/common'

export async function getColors({
  limit = 3,
  offset = 0,
}: IRequestColorsContract): Promise<IResultRowsContract<IColorContract>> {
  const productQuery = db.raw(
    `
        WITH filtered_colors AS (
          SELECT DISTINCT
            colors.id,
            colors.name,
            colors.value
          FROM products
          LEFT JOIN colors on products.color_id = colors.id 
            AND colors.disabled_at IS NULL
            AND colors.deleted_at IS NULL
        )
        SELECT
          *,
          (SELECT COUNT(*) FROM filtered_colors) as total
        FROM filtered_colors
        ORDER BY id ASC
        LIMIT :limit OFFSET :offset
      `,
    { limit, offset },
  )

  const result = await productQuery
  const total = result.rows.length > 0 ? parseInt(result.rows[0].total) : 0

  const colors: IColorContract[] = result.rows.reduce(
    (accumulator: IColorContract[], color: IColor) => {
      accumulator.push({
        id: color.id,
        name: color.name,
        value: color.value,
      })

      return accumulator
    },
    [],
  )

  return { rows: colors, total }
}
