import { db, IAttributeDictionaryValue } from '@backend/shared/db'
import {
  IAttributeDictionaryValueContract,
  IResultMapContract,
} from '@common/interfaces'

export async function getAttributeDictionaryValuesMap(): Promise<
  IResultMapContract<IAttributeDictionaryValueContract>
> {
  const attributeDictionaryValuesQuery = db.raw(
    `
        SELECT 
          attribute_dictionary_values.id,
          attribute_dictionary_values.attribute_id,
          attribute_dictionary_values.value
        FROM attribute_dictionary_values 
        LEFT JOIN attributes ON attributes.id = attribute_dictionary_values.attribute_id 
          AND attributes.deleted_at IS NULL 
          AND attributes.disabled_at IS NULL
        WHERE attribute_dictionary_values.disabled_at IS NULL
        AND attribute_dictionary_values.deleted_at IS NULL
        ORDER BY attribute_dictionary_values.value ASC
      `,
  )

  const result = await attributeDictionaryValuesQuery

  const attributeDictionaryValues: IAttributeDictionaryValueContract =
    result.rows.reduce(
      (
        accumulator: IAttributeDictionaryValueContract,
        attributeDictionaryValue: IAttributeDictionaryValue,
      ) => {
        return {
          ...accumulator,
          [attributeDictionaryValue.attribute_id]: [
            ...(accumulator?.[attributeDictionaryValue.attribute_id] ?? []),
            {
              id: attributeDictionaryValue.id,
              value: attributeDictionaryValue.value,
            },
          ],
        }
      },
      {},
    )

  return { map: attributeDictionaryValues }
}
