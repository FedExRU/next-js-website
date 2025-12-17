import { db, IAttribute } from '@backend/shared/db'
import {
  AttributeType,
  IAttributeContract,
  IRequestAttributesContract,
  IResultRowsContract,
} from '@common/interfaces'

export async function getAttributes({
  limit = 3,
  offset = 0,
}: IRequestAttributesContract): Promise<
  IResultRowsContract<IAttributeContract>
> {
  const attributesQuery = db.raw(
    `
        WITH filtered_attributes AS (
          SELECT DISTINCT 
            attributes.id, 
            attributes.name, 
            attribute_types.code as attribute_type,
            attributes.code as code
          FROM attributes 
          LEFT JOIN attribute_types ON attribute_types.id = attributes.attribute_type_id 
            AND attribute_types.deleted_at IS NULL 
            AND attribute_types.disabled_at IS NULL 
          LEFT JOIN category_attributes ON category_attributes.attribute_id = attributes.id 
            AND category_attributes.deleted_at IS null 
            AND category_attributes.disabled_at IS null 
          RIGHT JOIN product_base_attributes ON product_base_attributes.category_attribute_id = category_attributes.id 
            AND product_base_attributes.deleted_at IS NULL 
            AND product_base_attributes.disabled_at IS NULL
          WHERE attributes.disabled_at IS NULL
          AND attributes.deleted_at IS NULL
        )
        SELECT
          *,
          (SELECT COUNT(*) FROM filtered_attributes) as total
        FROM filtered_attributes
        ORDER BY id DESC
        LIMIT :limit OFFSET :offset
      `,
    { limit, offset },
  )

  const result = await attributesQuery

  const total = result.rows.length > 0 ? parseInt(result.rows[0].total) : 0

  const attributes: IAttributeContract[] = result.rows.reduce(
    (
      accumulator: IAttributeContract[],
      attribute: Pick<IAttribute, 'code' | 'id' | 'name'> & {
        attribute_type: AttributeType
      },
    ) => {
      accumulator.push({
        attributeType: attribute.attribute_type,
        code: attribute.code.toLowerCase(),
        id: attribute.id,
        name: attribute.name,
      })

      return accumulator
    },
    [],
  )

  return { rows: attributes, total }
}
