import bannerIdImg02 from './assets/arka_divan_mebel_209600_1920x1080 (1).webp'
import articlePreviewImg01 from './assets/article-01.webp'
import articlePreviewImg02 from './assets/article-02.webp'
import articlePreviewImg03 from './assets/article-03.webp'
import productImg04 from './assets/basket.webp'
import categoryBedroomImg from './assets/category-bedroom.webp'
import categoryKitchen from './assets/category-kitchen.webp'
import categoryLivingRoomImg from './assets/category-living-room.webp'
import productImg01 from './assets/divan.webp'
import productImg03 from './assets/lamp2.webp'
import productImg02 from './assets/lamp.webp'
import bannerIdImg01 from './assets/Paste image (1) (1).webp'
import bannerIdImg03 from './assets/postel_komnata_mebel_76186_1920x1080 (1).webp'
import productImg05 from './assets/toaster.webp'

const iconsSvg = {
  advantages: {
    freeShipping:
      '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M28 38V14M28 38H32M28 38H18M28 14C28 9.58172 24.4183 6 20 6H12C7.58172 6 4 9.58172 4 14V30C4 33.7304 6.55333 36.8645 10.0077 37.7499M28 14H34.4182C35.4344 14 36.4126 14.3868 37.154 15.0819L42.7358 20.3148C43.5424 21.071 44 22.1273 44 23.2329V34C44 36.2091 42.2091 38 40 38M40 38C40 40.2091 38.2091 42 36 42C33.7909 42 32 40.2091 32 38M40 38C40 35.7909 38.2091 34 36 34C33.7909 34 32 35.7909 32 38M18 38C18 40.2091 16.2091 42 14 42C11.7909 42 10 40.2091 10 38C10 37.916 10.0026 37.8326 10.0077 37.7499M18 38C18 35.7909 16.2091 34 14 34C11.8748 34 10.1368 35.6573 10.0077 37.7499" stroke="currentColor" stroke-width="2.5"/> <path d="M20 16H16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M20 24H12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
    fullSupport:
      '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M42 38V34.7081C42 33.0725 41.0042 31.6017 39.4856 30.9942L35.4173 29.3669C33.4857 28.5943 31.2844 29.4312 30.354 31.292L30 32C30 32 25 31 21 27C17 23 16 18 16 18L16.708 17.646C18.5688 16.7156 19.4057 14.5143 18.6331 12.5827L17.0058 8.51444C16.3983 6.99581 14.9275 6 13.2919 6H10C7.79086 6 6 7.79086 6 10C6 27.6731 20.3269 42 38 42C40.2091 42 42 40.2091 42 38Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/> </svg>',
    moneyBack:
      '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" stroke-width="2.5"/> <circle cx="4" cy="4" r="4" transform="matrix(1 0 0 -1 20 28)" stroke="currentColor" stroke-width="2.5"/> <circle cx="2" cy="2" r="2" transform="matrix(1 0 0 -1 34 26)" fill="currentColor"/> <circle cx="2" cy="2" r="2" transform="matrix(1 0 0 -1 10 26)" fill="currentColor"/> </svg>',
    securePayments:
      '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M32 16H16M32 16C36.4183 16 40 19.5817 40 24V36C40 40.4183 36.4183 44 32 44H16C11.5817 44 8 40.4183 8 36V24C8 19.5817 11.5817 16 16 16M32 16V12C32 7.58172 28.4183 4 24 4C19.5817 4 16 7.58172 16 12V16M24 32V28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/> </svg>',
  },
  socialNetworks: {
    facebook: JSON.stringify(
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
    ),
    instargarm: JSON.stringify(
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" stroke-width="1.5"/> <circle cx="18" cy="6" r="1" fill="currentColor"/> <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.5"/> </svg>',
    ),
    youtube: JSON.stringify(
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="3" width="20" height="18" rx="4" stroke="currentColor" stroke-width="1.5"/> <path d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/> </svg>',
    ),
  },
}

export default {
  advantages: [
    {
      description: 'Order above $200',
      icon: iconsSvg.advantages.freeShipping,
      id: 1,
      kind: 'freeShipping',
      title: 'Free shipping',
    },
    {
      description: '30 days guarantee',
      icon: iconsSvg.advantages.moneyBack,
      id: 2,
      kind: 'moneyBack',
      title: 'Money-back',
    },
    {
      description: 'Secured by Stripe',
      icon: iconsSvg.advantages.securePayments,
      id: 3,
      kind: 'securePayments',
      title: 'Secure payments',
    },
    {
      description: 'Phone and email support',
      icon: iconsSvg.advantages.fullSupport,
      id: 4,
      kind: 'fullSupport',
      title: '24/7 support',
    },
  ],
  advantagesKinds: [
    'freeShipping',
    'fullSupport',
    'moneyBack',
    'securePayments',
  ],
  articles: [
    {
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      id: 1,
      imagePreview: articlePreviewImg01.src,
      isNew: true,
      name: '7 ways to decor your home',
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
    },
    {
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      id: 2,
      imagePreview: articlePreviewImg02.src,
      isNew: true,
      name: 'Kitchen organization',
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
    },
    {
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      id: 3,
      imagePreview: articlePreviewImg03.src,
      isNew: true,
      name: 'Decor your bedroom',
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
    },
  ],
  categories: [
    {
      createdAt: 'May 5, 2024 at 2:58:14 PM UTC+3',
      id: 1,
      image: categoryLivingRoomImg.src,
      isDeleted: false,
      isDisabled: false,
      name: 'Living Room',
      parentId: null,
      slug: 'living-room',
      updatedAt: 'May 5, 2024 at 2:58:14 PM UTC+3',
    },
    {
      createdAt: 'May 5, 2024 at 2:58:14 PM UTC+3',
      id: 2,
      image: categoryBedroomImg.src,
      isDeleted: false,
      isDisabled: false,
      name: 'Bedroom',
      parentId: null,
      slug: 'Bedroom',
      updatedAt: 'May 5, 2024 at 2:58:14 PM UTC+3',
    },
    {
      createdAt: 'May 5, 2024 at 2:58:14 PM UTC+3',
      id: 3,
      image: categoryKitchen.src,
      isDeleted: false,
      isDisabled: false,
      name: 'Kitchen',
      parentId: null,
      slug: 'Kitchen',
      updatedAt: 'May 5, 2024 at 2:58:14 PM UTC+3',
    },
  ],
  mainSliderItems: [
    {
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      description:
        'World class home and office furniture at never before rates',
      id: 1,
      image: bannerIdImg01.src,
      isDisabled: false,
      title: 'Modern Furniture For Sale',
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      url: '#',
    },
    {
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      description: 'Discover your hone with modern bedroom furniture',
      id: 2,
      image: bannerIdImg02.src,
      isDisabled: false,
      title: 'Dream Bedroom',
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      url: '#',
    },
    {
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      description: 'Enhance your home with new summer collection',
      id: 3,
      image: bannerIdImg03.src,
      isDisabled: false,
      title: 'Living Room Furniture',
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      url: '#',
    },
  ],
  products: [
    {
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      discountPercent: 50,
      id: 1,
      image: productImg01.src,
      isNew: true,
      name: 'Loveseat Sofa',
      price: 400,
      priceDiscount: 199,
      rating: 5,
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
    },
    {
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      discountPercent: null,
      id: 2,
      image: productImg02.src,
      isNew: true,
      name: 'Table Lamp',
      price: 24.99,
      priceDiscount: null,
      rating: 4.5,
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
    },
    {
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      discountPercent: null,
      id: 3,
      image: productImg03.src,
      isNew: true,
      name: 'Beige Table Lamp',
      price: 30,
      priceDiscount: null,
      rating: 4.8,
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
    },
    {
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      discountPercent: 10,
      id: 4,
      image: productImg04.src,
      isNew: true,
      name: 'Bamboo Basket',
      price: 18,
      priceDiscount: 16.99,
      rating: 5,
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
    },
    {
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      discountPercent: null,
      id: 5,
      image: productImg05.src,
      isNew: true,
      name: 'Toaster',
      price: 50,
      priceDiscount: null,
      rating: 5,
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
    },
    {
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      discountPercent: 50,
      id: 6,
      image: productImg01.src,
      isNew: true,
      name: 'Loveseat Sofa',
      price: 400,
      priceDiscount: 199,
      rating: 5,
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
    },
    {
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      discountPercent: null,
      id: 7,
      image: productImg02.src,
      isNew: true,
      name: 'Table Lamp',
      price: 24.99,
      priceDiscount: null,
      rating: 4.5,
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
    },
    {
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      discountPercent: null,
      id: 8,
      image: productImg03.src,
      isNew: true,
      name: 'Beige Table Lamp',
      price: 30,
      priceDiscount: null,
      rating: 4.8,
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
    },
    {
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      discountPercent: 10,
      id: 9,
      image: productImg04.src,
      isNew: true,
      name: 'Bamboo Basket',
      price: 16.99,
      priceDiscount: 18,
      rating: 5,
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
    },
    {
      createdAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
      discountPercent: null,
      id: 10,
      image: productImg05.src,
      isNew: true,
      name: 'Toaster',
      price: 50,
      priceDiscount: null,
      rating: 5,
      updatedAt: 'May 5, 2024 at 3:01:06 PM UTC+3',
    },
  ],
  socialNetworks: [
    {
      icon: iconsSvg.socialNetworks.instargarm,
      id: 1,
      kind: 'instargarm',
      name: 'Instargarm',
      url: '#',
    },
    {
      icon: iconsSvg.socialNetworks.facebook,
      id: 2,
      kind: 'facebook',
      name: 'Facebook',
      url: '#',
    },
    {
      icon: iconsSvg.socialNetworks.youtube,
      id: 3,
      kind: 'youtube',
      name: 'Youtube',
      url: '#',
    },
  ],
} as const
