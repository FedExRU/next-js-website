import { getNewArrivals as getNewArrivalsFeature } from '@backend/features/products'

export function getNewArrivals() {
  return getNewArrivalsFeature()
}
