import categoryKitchen from './assets/category-kitchen.webp'
import categoryLivingRoomImg from './assets/category-living-room.webp'
import categoryBedroomImg from './assets/category-bedroom.webp'

import bannerIdImg01 from './assets/Paste image (1) (1).webp'
import bannerIdImg02 from './assets/arka_divan_mebel_209600_1920x1080 (1).webp'
import bannerIdImg03 from './assets/postel_komnata_mebel_76186_1920x1080 (1).webp'

import productImg01 from './assets/divan.webp'
import productImg02 from './assets/lamp.webp'
import productImg03 from './assets/lamp2.webp'
import productImg04 from './assets/basket.webp'
import productImg05 from './assets/toaster.webp'

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
  featrueSliderItems: [
    {
      id: 1,
      name: 'Loveseat Sofa',
      image: productImg01.src,
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      price: 400,
      priceDiscount: 199,
      discountPercent: 50,
      rating: 5,
      isNew: true,
    },
    {
      id: 2,
      name: 'Table Lamp',
      image: productImg02.src,
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      price: 24.99,
      priceDiscount: null,
      discountPercent: null,
      rating: 4.5,
      isNew: false,
    },
    {
      id: 3,
      name: 'Beige Table Lamp',
      image: productImg03.src,
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      price: 30,
      priceDiscount: null,
      discountPercent: null,
      rating: 4.8,
      isNew: true,
    },
    {
      id: 4,
      name: 'Bamboo Basket',
      image: productImg04.src,
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      price: 16.99,
      priceDiscount: 18,
      discountPercent: 10,
      rating: 5,
      isNew: false,
    },
    {
      id: 5,
      name: 'Toaster',
      image: productImg05.src,
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      price: 50,
      priceDiscount: null,
      discountPercent: null,
      rating: 5,
      isNew: true,
    },
  ],
} as const
