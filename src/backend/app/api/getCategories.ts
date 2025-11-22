import { getCategories as getCategoriesFeature } from '@backend/features/categories'
import { IRequestCategoriesContract } from '@common/interfaces'

export async function getCategories(filters: IRequestCategoriesContract) {
  return await getCategoriesFeature(filters)
}
