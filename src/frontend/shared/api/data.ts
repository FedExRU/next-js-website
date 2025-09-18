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
  banners: {
    menu: JSON.stringify(
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.0181 14.8356L20.7727 15.5444H20.7727L21.0181 14.8356ZM21.0181 9.16437L21.2635 9.8731V9.8731L21.0181 9.16437ZM2.98189 14.8356L3.22727 15.5444H3.22727L2.98189 14.8356ZM2.98189 9.16437L2.73652 9.8731L2.73652 9.8731L2.98189 9.16437ZM15.5303 9.53033C15.8232 9.23744 15.8232 8.76256 15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L15.5303 9.53033ZM8.46967 14.4697C8.17678 14.7626 8.17678 15.2374 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L8.46967 14.4697ZM6 20.25C4.20507 20.25 2.75 18.7949 2.75 17H1.25C1.25 19.6234 3.37665 21.75 6 21.75V20.25ZM21.25 17C21.25 18.7949 19.7949 20.25 18 20.25V21.75C20.6234 21.75 22.75 19.6234 22.75 17H21.25ZM18 3.75C19.7949 3.75 21.25 5.20507 21.25 7H22.75C22.75 4.37665 20.6234 2.25 18 2.25V3.75ZM6 2.25C3.37665 2.25 1.25 4.37665 1.25 7H2.75C2.75 5.20507 4.20507 3.75 6 3.75V2.25ZM21.2635 14.1269C20.3815 13.8216 19.75 12.9836 19.75 12H18.25C18.25 13.6424 19.3054 15.0363 20.7727 15.5444L21.2635 14.1269ZM19.75 12C19.75 11.0164 20.3815 10.1784 21.2635 9.8731L20.7727 8.45565C19.3054 8.96367 18.25 10.3576 18.25 12H19.75ZM4.25 12C4.25 12.9836 3.61845 13.8216 2.73652 14.1269L3.22727 15.5444C4.69461 15.0363 5.75 13.6424 5.75 12H4.25ZM2.73652 9.8731C3.61845 10.1784 4.25 11.0164 4.25 12H5.75C5.75 10.3576 4.69462 8.96367 3.22727 8.45565L2.73652 9.8731ZM22.75 8V7H21.25V8H22.75ZM21.25 16V17H22.75V16H21.25ZM1.25 16V17H2.75V16H1.25ZM2.75 8V7H1.25V8H2.75ZM18 20.25H6V21.75H18V20.25ZM18 2.25H6V3.75H18V2.25ZM2.73652 14.1269C2.05785 14.3619 1.25 14.9975 1.25 16H2.75C2.75 15.9441 2.77081 15.8708 2.85172 15.7813C2.9366 15.6873 3.06974 15.5989 3.22727 15.5444L2.73652 14.1269ZM21.2635 9.8731C21.9422 9.63813 22.75 9.00246 22.75 8H21.25C21.25 8.05587 21.2292 8.12917 21.1483 8.21871C21.0634 8.31265 20.9303 8.40111 20.7727 8.45565L21.2635 9.8731ZM3.22727 8.45565C3.06974 8.40111 2.9366 8.31265 2.85172 8.21871C2.77081 8.12917 2.75 8.05587 2.75 8H1.25C1.25 9.00246 2.05785 9.63813 2.73652 9.8731L3.22727 8.45565ZM20.7727 15.5444C20.9303 15.5989 21.0634 15.6873 21.1483 15.7813C21.2292 15.8708 21.25 15.9441 21.25 16H22.75C22.75 14.9975 21.9422 14.3619 21.2635 14.1269L20.7727 15.5444ZM9.25 9C9.25 9.13807 9.13807 9.25 9 9.25V10.75C9.9665 10.75 10.75 9.9665 10.75 9H9.25ZM9 9.25C8.86193 9.25 8.75 9.13807 8.75 9H7.25C7.25 9.9665 8.0335 10.75 9 10.75V9.25ZM8.75 9C8.75 8.86193 8.86193 8.75 9 8.75V7.25C8.0335 7.25 7.25 8.0335 7.25 9H8.75ZM9 8.75C9.13807 8.75 9.25 8.86193 9.25 9H10.75C10.75 8.0335 9.9665 7.25 9 7.25V8.75ZM15.25 15C15.25 15.1381 15.1381 15.25 15 15.25V16.75C15.9665 16.75 16.75 15.9665 16.75 15H15.25ZM15 15.25C14.8619 15.25 14.75 15.1381 14.75 15H13.25C13.25 15.9665 14.0335 16.75 15 16.75V15.25ZM14.75 15C14.75 14.8619 14.8619 14.75 15 14.75V13.25C14.0335 13.25 13.25 14.0335 13.25 15H14.75ZM15 14.75C15.1381 14.75 15.25 14.8619 15.25 15H16.75C16.75 14.0335 15.9665 13.25 15 13.25V14.75ZM14.4697 8.46967L8.46967 14.4697L9.53033 15.5303L15.5303 9.53033L14.4697 8.46967Z" fill="currentColor"/> </svg>',
    ),
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
  banners: [
    {
      appearAt: null,
      createdAt: '2022-10-01T00:00:00.000Z',
      href: '#',
      id: 1,
      image: iconsSvg.banners.menu,
      imageType: 'svg',
      isHidden: false,
      linkText: 'Shop now',
      placement: 'menu',
      text: 'Free shipping on orders over $200',
      updatedAt: '2022-10-01T00:00:00.000Z',
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
