import { EntityWithSlots } from '../../../../../shared/lib'

export type ToolbarProps = EntityWithSlots<ToolbarSlots>

type ToolbarSlots = {
  auth?: React.ReactNode
  cart?: React.ReactNode
  siteSearch?: React.ReactNode
}
