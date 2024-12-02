'use server'

import categoryKitchen from './assets/category-kitchen.webp'
import categoryLivingRoomImg from './assets/category-living-room.webp'
import categoryBedroomImg from './assets/category-bedroom.webp'

const data = {
  categories: [
    {
      id: 1,
      createdAt: 'May 5, 2024 at 2:58:14 PM UTC+3',
      updatedAt: 'May 5, 2024 at 2:58:14 PM UTC+3',
      image: categoryLivingRoomImg.src,
      isDeleted: false,
      isDisabled: false,
      name: 'Living Room',
      slug: 'living-room',
      parentId: null,
    },
    {
      id: 2,
      createdAt: 'May 5, 2024 at 2:58:14 PM UTC+3',
      updatedAt: 'May 5, 2024 at 2:58:14 PM UTC+3',
      image: categoryBedroomImg.src,
      isDeleted: false,
      isDisabled: false,
      name: 'Bedroom',
      slug: 'Bedroom',
      parentId: null,
    },
    {
      id: 3,
      createdAt: 'May 5, 2024 at 2:58:14 PM UTC+3',
      updatedAt: 'May 5, 2024 at 2:58:14 PM UTC+3',
      image: categoryKitchen.src,
      isDeleted: false,
      isDisabled: false,
      name: 'Kitchen',
      slug: 'Kitchen',
      parentId: null,
    },
  ]
} as const

export const query = async <T>(key: string): Promise<T> => {
  const d = data[key as keyof typeof data]

  console.log('foo', d);

  return new Promise(() => data[key as keyof typeof data] as T)
}
