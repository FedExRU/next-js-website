import SlickSliderOriginal, {
  type InnerSlider as InnerSliderOriginal,
} from 'react-slick'

import { SliderWrapperProps } from './components'

export type GetStylesProps = Pick<SliderProps, 'slidesToShowSpacing'>

export interface InnerSlider extends InnerSliderOriginal {
  state?: {
    currentSlide?: number
  }
}

export interface SlickSlider extends SlickSliderOriginal {
  innerSlider?: InnerSlider
}

export type SliderAutoplayTimers = Record<
  'end' | 'start',
  ReturnType<typeof setTimeout> | undefined
>

export type SliderProps = Pick<SliderWrapperProps, 'withBackdrop'> & {
  autoplay?: boolean
  autoplaySpeed?: number
  infinite?: boolean
  initialSlide?: number
  lazyLoad?: boolean
  loading?: boolean
  loadingAppearTimeout?: number
  slidesToShow?: number
  slidesToShowSpacing?: number
  speed?: number
  withArrows?: boolean
  withDots?: boolean
}
