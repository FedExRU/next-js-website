'use client'

import { Box } from '@mui/material'

import { SliderBullet } from './sliderBullet'
import { SliderBulletsProps } from './types'

export const SliderBullets: React.FC<SliderBulletsProps> = ({
  activeSlideIndex,
  onClick,
  slidesCount,
}) => {
  const makeHandleClick = (slideIndex: number) => () => {
    onClick(slideIndex)
  }

  if (!slidesCount) {
    return null
  }

  return (
    <Box
      sx={{
        bottom: 0,
        display: 'flex',
        gap: 1,
        justifyContent: 'center',
        marginBottom: 4,
        position: 'absolute',
        width: '100%',
        zIndex: 1,
      }}
    >
      {Array.from({ length: slidesCount }).map((_, i) => (
        <SliderBullet
          aria-label={`Go to slide ${i + 1}`}
          isActive={activeSlideIndex === i}
          key={i}
          onClick={makeHandleClick(i)}
        />
      ))}
    </Box>
  )
}
