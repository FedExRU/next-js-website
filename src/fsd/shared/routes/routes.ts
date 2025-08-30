import { RoutesMap } from './types'

export const ROUTES: RoutesMap = {
  BLOG: { id: 5, label: 'Blog', path: '/blog' },
  CONTACT: { id: 3, label: 'Contact', path: '/contact' },
  HOME: { id: 1, label: 'Home', path: '/' },
  PRODUCT: { id: 2, label: 'Product', path: '/product' },
  SHOP: { id: 4, label: 'Shop', path: '/shop' },
}

export const COPYRIGHT_ROUTES: RoutesMap = {
  PRIVACY: { id: 1, label: 'Privacy Policy', path: '/privacy' },
  TERMS: { id: 2, label: 'Terms of Use', path: '/terms' },
}

export const AUTH_ROUTES: RoutesMap = {
  LOGIN: { id: 1, label: 'Login', path: '/login' },
  REGISTER: { id: 2, label: 'Register', path: '/register' },
}
