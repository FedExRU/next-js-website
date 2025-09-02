import { EntityWithView } from '../../../lib'

export type GetMenuItemStylesProps = Pick<
  MenuListItemProps,
  'isActive' | 'view'
>

export type MenuListItemProps = EntityWithView & {
  icon?: React.ReactNode
  isActive?: boolean
  path?: string
}
