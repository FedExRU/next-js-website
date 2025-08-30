import { EntityWithSlots } from '@fsd/shared'

export type MenuHeaderProps = EntityWithSlots<MenuHeaderSlots>

type MenuHeaderSlots = {
  toolbar?: React.ReactNode
}
