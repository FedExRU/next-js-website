import { RouteItem } from './types'

/**
 * TODO: Сделать динамические роуты
 */
const routes: RouteItem = {
  label: 'Home',
  path: '/',
  type: 'Literal',
  children: [
    {
      label: 'Shop',
      path: 'shop',
      type: 'Literal',
      children: [
        {
          label: 'Contacts',
          path: 'contacts',
          type: 'Literal',
        },
      ],
    },
    {
      label: 'Store',
      path: 'store',
      type: 'Literal',
    },
    {
      path: 'item/${id}',
      type: 'Dynamic',
    },
  ],
}

export default routes
