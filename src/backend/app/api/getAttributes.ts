import { getAttributes as getAttributesFeature } from '@backend/features/attributes'
import { IRequestAttributesContract } from '@common/interfaces'

export async function getAttributes(filters: IRequestAttributesContract) {
  return await getAttributesFeature(filters)
}
