import { SliderNavigationVariant } from './constants'

export type SliderNavigationVariantType = keyof typeof SliderNavigationVariant

export type SliderNavigationButtonProps = {
  variant?: SliderNavigationVariantType
  disabled?: boolean
  onClick?: () => void
}
