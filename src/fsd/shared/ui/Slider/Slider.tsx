'use client'

import { FC, useRef, useState, Children as ReactChildren } from 'react'
import 'swiper/css'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Box, Fade } from '@mui/material'
import {
  SliderNavigationButton,
  SliderNavigationVariant,
  SliderBullets,
  SliderLoader,
  SliderWrapper,
} from './components'
import { LOADING_APPEAR_TIMEOUT } from './constants'
import { SliderProps } from './types'
import { SLIDER_AUTOPLAY_DELAY } from '@fsd/shared'

export const Slider: FC<SliderProps> = ({
  loadingAppearTimeout = LOADING_APPEAR_TIMEOUT,
  isLoading = false,
  children,
}) => {
  const swiper = useRef<SwiperClass>()

  const [isEnd, setIsEnd] = useState(false)
  const [isStart, setIsStart] = useState(true)
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>()

  const handleSwiper = (s: SwiperClass) => {
    swiper.current = s
    setActiveSlideIndex(s.activeIndex)
  }

  const handleSlideChange = (s: SwiperClass) => {
    setIsEnd(s.isEnd)
    setIsStart(s.isBeginning)
    setActiveSlideIndex(s.activeIndex)
  }

  const handleClickPrev = () => {
    if (isStart) {
      return
    }

    swiper.current?.slidePrev()
  }

  const handleClickNext = () => {
    if (isEnd) {
      return
    }

    swiper.current?.slideNext()
  }

  const handleBulletClick = (slideIndex: number) => {
    swiper.current?.slideTo(slideIndex)
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <SliderNavigationButton
        disabled={isStart || isLoading}
        variant={SliderNavigationVariant.prev}
        onClick={handleClickPrev}
      />
      <SliderWrapper>
        <Fade
          appear={false}
          in={isLoading}
          unmountOnExit
          timeout={loadingAppearTimeout}
        >
          <SliderLoader />
        </Fade>
        <Fade in={!isLoading} unmountOnExit timeout={loadingAppearTimeout}>
          <Box>
            <Swiper
              autoplay={{
                delay: SLIDER_AUTOPLAY_DELAY,
              }}
              modules={[Autoplay]}
              onSwiper={handleSwiper}
              onSlideChange={handleSlideChange}
              slidesPerView={1}
            >
              {ReactChildren.map(children, (child, index) => (
                <SwiperSlide style={{ height: 'auto' }} key={index}>
                  {child}
                </SwiperSlide>
              ))}
            </Swiper>
            <SliderBullets
              onClick={handleBulletClick}
              slidesCount={ReactChildren.count(children)}
              activeSlideIndex={activeSlideIndex}
            />
          </Box>
        </Fade>
      </SliderWrapper>
      <SliderNavigationButton
        disabled={isEnd || isLoading}
        variant={SliderNavigationVariant.next}
        onClick={handleClickNext}
      />
    </Box>
  )
}
