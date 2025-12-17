import { getProducts as getProductsFeature } from '@backend/features/products'
import { IRequestProductsContract } from '@common/interfaces'

export async function getProducts(filters: IRequestProductsContract) {
  return await getProductsFeature(filters)
}
