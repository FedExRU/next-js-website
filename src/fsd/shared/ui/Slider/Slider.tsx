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
  endless,
  initialSlide = 0,
  isLoading,
  lazyLoad,
  loadingAppearTimeout = 500,
  slidesToShow = 1,
  slidesToShowSpacing = 3,
  speed = 500,
  withArrows,
  withBackdrop,
  withDots,
}) => {
  const sliderRef = React.useRef<null | SlickSlider>(null)
  const autoplayEndlessTimer = React.useRef<SliderAutoplayTimers>({
    end: undefined,
    start: undefined,
  })
  const [isPrevArrowDisabled, setIsPrevArrowDisabled] = React.useState(false)
  const [isNextArrowDisabled, setIsNextArrowDisabled] = React.useState(false)

  const { styles } = getStyles({
    slidesToShowSpacing: slidesToShow > 1 ? slidesToShowSpacing : 0,
  })

  const processArrowsDisabling = (slider?: null | SlickSlider) => {
    if (!slider) {
      return
    }
    const currentSlide = slider?.innerSlider?.state?.currentSlide

    setIsPrevArrowDisabled(currentSlide === 0)
    setIsNextArrowDisabled(currentSlide === React.Children.count(children) - 1)
  }

  const handleAfterChange = (currentSlide: number) => {
    processArrowsDisabling(sliderRef.current)

    if (!endless || !autoplay) {
      return
    }
    clearTimeout(autoplayEndlessTimer.current.start)
    clearTimeout(autoplayEndlessTimer.current.end)

    const createTimer = () =>
      setTimeout(() => {
        sliderRef.current?.slickGoTo(0)
      }, autoplaySpeed)

    if (currentSlide === React.Children.count(children) - 1) {
      autoplayEndlessTimer.current.end = createTimer()
    }
    if (currentSlide === 0) {
      autoplayEndlessTimer.current.start = createTimer()
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
    processArrowsDisabling(slider)
    sliderRef.current = slider
  }

  return (
    <Box sx={styles.sliderWrapper}>
      <SliderWrapper withBackdrop={withBackdrop}>
        <Fade
          appear={false}
          in={isLoading}
          timeout={loadingAppearTimeout}
          unmountOnExit
        >
          <SliderLoader />
        </Fade>
        <Box
          component={Fade}
          in={!isLoading}
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
              infinite={!endless}
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
