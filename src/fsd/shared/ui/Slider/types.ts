import SlickSliderOriginal, {
  type InnerSlider as InnerSliderOriginal,
} from 'react-slick'

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

export type SliderProps = {
  autoplay?: boolean
  autoplaySpeed?: number
  infinite?: boolean
  initialSlide?: number
  lazyLoad?: boolean
  loading?: boolean
  loadingAppearTimeout?: number
  slidesToShow?: number
  speed?: number
  withArrows?: boolean
  withDots?: boolean
}
