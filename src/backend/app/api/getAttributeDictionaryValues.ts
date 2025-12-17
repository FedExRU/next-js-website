import { getAttributeDictionaryValuesMap } from '@backend/features/attributes'

export async function getAttributeDictionaryValues() {
  return await getAttributeDictionaryValuesMap()
}
