import { SliderNavigationVariant } from './constants'

export type SliderNavigationButtonProps = {
  disabled?: boolean
  onClick?: () => void
  variant?: SliderNavigationVariantType
}

export type SliderNavigationVariantType = keyof typeof SliderNavigationVariant
