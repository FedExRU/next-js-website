'use client'

import { Box, Fade } from '@mui/material'
import {
  type FC,
  type PropsWithChildren,
  Children as ReactChildren,
  useRef,
} from 'react'
import SlickSlider from 'react-slick'

import { SliderLoader, SliderWrapper } from './components'
import { SliderProps } from './types'

export const Slider: FC<PropsWithChildren<SliderProps>> = ({
  autoplay,
  autoplaySpeed = 5000,
  children,
  endless,
  initialSlide = 0,
  isLoading,
  lazyLoad,
  loadingAppearTimeout = 500,
  slidesToShow = 1,
  speed = 500,
  withDots,
}) => {
  const sliderRef = useRef<null | SlickSlider>(null)
  const autoplayEndlessTimer = useRef<
    Record<'end' | 'start', ReturnType<typeof setTimeout> | undefined>
  >({ end: undefined, start: undefined })

  const handleEndlessAutoplay = (currentSlide: number) => {
    if (!endless || !autoplay) {
      return
    }
    clearTimeout(autoplayEndlessTimer.current.start)
    clearTimeout(autoplayEndlessTimer.current.end)

    if (currentSlide === ReactChildren.count(children) - 1) {
      autoplayEndlessTimer.current.end = setTimeout(() => {
        sliderRef.current?.slickGoTo(0)
      }, autoplaySpeed)
    }
    if (currentSlide === 0) {
      autoplayEndlessTimer.current.start = setTimeout(() => {
        sliderRef.current?.slickGoTo(0)
      }, autoplaySpeed)
    }
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <SliderWrapper>
        <Fade
          appear={false}
          in={isLoading}
          timeout={loadingAppearTimeout}
          unmountOnExit
        >
          <SliderLoader />
        </Fade>
        <Fade in={!isLoading} timeout={loadingAppearTimeout} unmountOnExit>
          <Box>
            <SlickSlider
              afterChange={handleEndlessAutoplay}
              autoplay={autoplay}
              autoplaySpeed={autoplaySpeed}
              dots={withDots}
              infinite={!endless}
              initialSlide={initialSlide}
              lazyLoad={lazyLoad ? 'anticipated' : undefined}
              ref={slider => {
                sliderRef.current = slider
              }}
              slidesToShow={slidesToShow}
              speed={speed}
            >
              {ReactChildren.map(children, (child, index) => (
                <div key={index}>{child}</div>
              ))}
            </SlickSlider>
          </Box>
        </Fade>
      </SliderWrapper>
    </Box>
  )
}

// import { SLIDER_AUTOPLAY_DELAY } from '@fsd/shared'
// import 'swiper/css'
// import { Box, Fade } from '@mui/material'
// import { FC, Children as ReactChildren, useRef, useState } from 'react'
// import { Autoplay } from 'swiper/modules'
// import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

// import {
//   SliderBullets,
//   SliderLoader,
//   SliderNavigationButton,
//   SliderNavigationVariant,
//   SliderWrapper,
// } from './components'
// import { LOADING_APPEAR_TIMEOUT } from './constants'
// import { SliderProps } from './types'

// export const Slider: FC<SliderProps> = ({
//   children,
//   isLoading = false,
//   loadingAppearTimeout = LOADING_APPEAR_TIMEOUT,
// }) => {
//   const swiper = useRef<SwiperClass>(undefined)

//   const [isEnd, setIsEnd] = useState(false)
//   const [isStart, setIsStart] = useState(true)
//   const [activeSlideIndex, setActiveSlideIndex] = useState<number>()

//   const handleSwiper = (s: SwiperClass) => {
//     swiper.current = s
//     setActiveSlideIndex(s.activeIndex)
//   }

//   const handleSlideChange = (s: SwiperClass) => {
//     setIsEnd(s.isEnd)
//     setIsStart(s.isBeginning)
//     setActiveSlideIndex(s.activeIndex)
//   }

//   const handleClickPrev = () => {
//     if (isStart) {
//       return
//     }

//     swiper.current?.slidePrev()
//   }

//   const handleClickNext = () => {
//     if (isEnd) {
//       return
//     }

//     swiper.current?.slideNext()
//   }

//   const handleBulletClick = (slideIndex: number) => {
//     swiper.current?.slideTo(slideIndex)
//   }

//   return (
//     <Box sx={{ position: 'relative' }}>
//       <SliderNavigationButton
//         disabled={isStart || isLoading}
//         onClick={handleClickPrev}
//         variant={SliderNavigationVariant.prev}
//       />
//       <SliderWrapper>
// <Fade
//   appear={false}
//   in={isLoading}
//   timeout={loadingAppearTimeout}
//   unmountOnExit
// >
//   <SliderLoader />
// </Fade>
//         <Fade in={!isLoading} timeout={loadingAppearTimeout} unmountOnExit>
//           <Box>
//             <Swiper
//               autoplay={{
//                 delay: SLIDER_AUTOPLAY_DELAY,
//               }}
//               modules={[Autoplay]}
//               onSlideChange={handleSlideChange}
//               onSwiper={handleSwiper}
//               slidesPerView={1}
//             >
// {ReactChildren.map(children, (child, index) => (
//   <SwiperSlide key={index} style={{ height: 'auto' }}>
//     {child}
//   </SwiperSlide>
// ))}
//             </Swiper>
//             <SliderBullets
//               activeSlideIndex={activeSlideIndex}
//               onClick={handleBulletClick}
//               slidesCount={ReactChildren.count(children)}
//             />
//           </Box>
//         </Fade>
//       </SliderWrapper>
//       <SliderNavigationButton
//         disabled={isEnd || isLoading}
//         onClick={handleClickNext}
//         variant={SliderNavigationVariant.next}
//       />
//     </Box>
//   )
// }
