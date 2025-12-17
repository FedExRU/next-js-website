import { getColors as getColorsFeature } from '@backend/features/colors'
import { IRequestColorsContract } from '@common/interfaces'

export async function getColors(filters: IRequestColorsContract) {
  return await getColorsFeature(filters)
}
