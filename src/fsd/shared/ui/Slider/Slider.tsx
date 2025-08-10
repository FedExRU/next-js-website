'use client'

import { Box, Fade } from '@mui/material'
import React from 'react'
import SlickSliderComponent from 'react-slick'

import {
  SliderBullets,
  SliderLoader,
  SliderNavigationButton,
  SliderWrapper,
} from './components'
import { getStyles } from './styles'
import { SlickSlider, SliderAutoplayTimers, SliderProps } from './types'

export const Slider: React.FC<React.PropsWithChildren<SliderProps>> = ({
  autoplay,
  autoplaySpeed = 5000,
  children,
  infinite,
  initialSlide = 0,
  lazyLoad,
  loading,
  loadingAppearTimeout = 500,
  slidesToShow = 1,
  slidesToShowSpacing = 3,
  speed = 500,
  withArrows,
  withBackdrop,
  withDots,
}) => {
  const sliderRef = React.useRef<null | SlickSlider>(null)
  const autoplayInfiniteTimer = React.useRef<SliderAutoplayTimers>({
    end: undefined,
    start: undefined,
  })
  const [isPrevArrowDisabled, setIsPrevArrowDisabled] = React.useState(false)
  const [isNextArrowDisabled, setIsNextArrowDisabled] = React.useState(false)

  const { styles } = getStyles({
    slidesToShowSpacing: slidesToShow > 1 ? slidesToShowSpacing : 0,
  })

  const processArrowsDisabling = () => {
    if (!sliderRef.current) {
      return
    }
    const currentSlide = sliderRef.current?.innerSlider?.state?.currentSlide

    setIsPrevArrowDisabled(currentSlide === 0)
    setIsNextArrowDisabled(currentSlide === React.Children.count(children) - 1)
  }

  const handleAfterChange = (currentSlide: number) => {
    processArrowsDisabling()

    if (infinite || !autoplay) {
      return
    }
    clearTimeout(autoplayInfiniteTimer.current.start)
    clearTimeout(autoplayInfiniteTimer.current.end)

    const createTimer = () =>
      setTimeout(() => {
        sliderRef.current?.slickGoTo(0)
      }, autoplaySpeed)

    if (currentSlide === React.Children.count(children) - 1) {
      autoplayInfiniteTimer.current.end = createTimer()
    }
    if (currentSlide === 0) {
      autoplayInfiniteTimer.current.start = createTimer()
    }
  }

  const handleAppendDots = () => (
    <SliderBullets
      activeSlideIndex={sliderRef?.current?.innerSlider?.state?.currentSlide}
      onClick={index => sliderRef?.current?.slickGoTo(index)}
      slidesCount={React.Children.count(children)}
    />
  )

  const handleRef = (slider: SlickSlider) => {
    sliderRef.current = slider
    processArrowsDisabling()
  }

  return (
    <Box sx={styles.sliderWrapper}>
      <SliderWrapper withBackdrop={withBackdrop}>
        <Fade
          appear={false}
          in={loading}
          timeout={loadingAppearTimeout}
          unmountOnExit
        >
          <SliderLoader />
        </Fade>
        <Box
          component={Fade}
          in={!loading}
          sx={styles.fade}
          timeout={loadingAppearTimeout}
          unmountOnExit
        >
          <Box>
            <Box
              afterChange={handleAfterChange}
              appendDots={handleAppendDots}
              arrows={withArrows}
              autoplay={autoplay}
              autoplaySpeed={autoplaySpeed}
              component={SlickSliderComponent}
              dots={withDots}
              infinite={infinite}
              initialSlide={initialSlide}
              lazyLoad={lazyLoad ? 'anticipated' : undefined}
              nextArrow={
                withArrows ? (
                  <SliderNavigationButton
                    disabled={isNextArrowDisabled}
                    variant="next"
                  />
                ) : (
                  <Box />
                )
              }
              prevArrow={
                withArrows ? (
                  <SliderNavigationButton
                    disabled={isPrevArrowDisabled}
                    variant="prev"
                  />
                ) : (
                  <Box />
                )
              }
              ref={handleRef}
              slidesToShow={slidesToShow}
              speed={speed}
              sx={styles.slider}
            >
              {React.Children.map(children, (child, index) => (
                <Box key={index}>{child}</Box>
              ))}
            </Box>
          </Box>
        </Box>
      </SliderWrapper>
    </Box>
  )
}
