import { db, IProduct } from '@backend/shared/db'
import { IProductContract, IRequestProductsContract } from '@common/interfaces'
import { IResultRowsContract } from '@common/interfaces/common'

export async function getProducts({
  limit = 3,
  offset = 0,
}: IRequestProductsContract): Promise<IResultRowsContract<IProductContract>> {
  const productQuery = db.raw(
    `
        WITH filtered_products AS (
          SELECT
            products.id,
            products.name,
            products.price,
            products_discounts.price as discount_price,
            discounts.percentage as discount_percentage,
            products.new,
            images.image,
            images.image_small,
            images.image_medium,
            images.image_large
          FROM products
          LEFT JOIN products_discounts ON products_discounts.product_id = products.id
            AND products_discounts.deleted_at IS NULL
            AND products_discounts.disabled_at IS NULL
          LEFT JOIN discounts ON products_discounts.discount_id = discounts.id
            AND discounts.deleted_at IS NULL
            AND discounts.disabled_at IS NULL
          LEFT JOIN gallery_images ON gallery_images.gallery_id = products.gallery_id
            AND gallery_images.deleted_at IS NULL
            AND gallery_images.disabled_at IS NULL
            AND gallery_images.primary_image = true
          LEFT JOIN images ON gallery_images.image_id = images.id
            AND images.deleted_at IS NULL
            AND images.disabled_at IS NULL
          WHERE products.disabled_at IS NULL
          AND products.deleted_at IS NULL
        )
        SELECT
          *,
          (SELECT COUNT(*) FROM filtered_products) as total
        FROM filtered_products
        ORDER BY id DESC
        LIMIT :limit OFFSET :offset
      `,
    { limit, offset },
  )

  const result = await productQuery
  const total = result.rows.length > 0 ? parseInt(result.rows[0].total) : 0

  const products: IProductContract[] = result.rows.reduce(
    (accumulator: IProductContract[], product: IProduct) => {
      accumulator.push({
        discountPercentage: product.discount_percentage,
        discountPrice: product.discount_price,
        id: product.id,
        image: product.image,
        imageLarge: product.image_large,
        imageMedium: product.image_medium,
        imageSmall: product.image_small,
        name: product.name,
        new: product.new,
        price: product.price,
      })

      return accumulator
    },
    [],
  )

  return { rows: products, total }
}

const buildWhereClause = filters => {
  let whereClause = ''
  if (filters) {
    for (const key in filters) {
      if (filters.hasOwnProperty(key)) {
        whereClause += ` AND ${key} = '${filters[key]}'` // Пример: AND category_id = '123'
      }
    }
  }
  return whereClause
}
