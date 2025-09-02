import { EntityWithView } from '../../lib'
import { MenuListItemProps } from './menuListItem'

export type GetStylesProps = Pick<MenuListProps, 'view'>

export type MenuListItem = MenuListItemProps & {
  id?: number | string
  label?: string
}

export type MenuListProps = EntityWithView & {
  items?: MenuListItem[]
}
