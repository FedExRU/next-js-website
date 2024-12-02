import categoryKitchen from './assets/category-kitchen.webp'
import categoryLivingRoomImg from './assets/category-living-room.webp'
import categoryBedroomImg from './assets/category-bedroom.webp'

import bannerIdImg01 from './assets/Paste image (1) (1).webp'
import bannerIdImg02 from './assets/arka_divan_mebel_209600_1920x1080 (1).webp'
import bannerIdImg03 from './assets/postel_komnata_mebel_76186_1920x1080 (1).webp'

export default {
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
  ],
  mainSliderItems: [
    {
      id: 1,
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      description:
        'World class home and office furniture at never before rates',
      image: bannerIdImg01.src,
      isDisabled: false,
      title: 'Modern Furniture For Sale',
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      url: '#',
    },
    {
      id: 2,
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      description: 'Discover your hone with modern bedroom furniture',
      image: bannerIdImg02.src,
      isDisabled: false,
      title: 'Dream Bedroom',
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      url: '#',
    },
    {
      id: 3,
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      description: 'Enhance your home with new summer collection',
      image: bannerIdImg03.src,
      isDisabled: false,
      title: 'Living Room Furniture',
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      url: '#',
    },
  ],
} as const
