import { LayoutType } from '../../contexts'

export type LayoutItem = {
  icon: React.ReactNode
  isVisibleInMobileView?: boolean
  label: string
  value: LayoutType
}
