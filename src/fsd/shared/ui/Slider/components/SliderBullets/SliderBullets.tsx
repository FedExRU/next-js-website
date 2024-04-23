'use client'

import { FC } from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
import { SliderBulletsProps } from './types'

export const SliderBullets: FC<SliderBulletsProps> = ({
  slidesCount,
  activeSlideIndex,
  onClick,
}) => {
  const theme = useTheme()

  const makeHandleClick = (slideIndex: number) => () => {
    onClick(slideIndex)
  }

  if (!slidesCount) {
    return null
  }

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'absolute',
        bottom: 0,
        gap: 1,
        justifyContent: 'center',
        width: '100%',
        zIndex: 1,
        marginBottom: 4,
      }}
    >
      {Array.from({ length: slidesCount }).map((_, i) => (
        <IconButton
          key={i}
          onClick={makeHandleClick(i)}
          aria-label={`Slide button number ${i + 1}`}
          sx={{
            padding: 0,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            height: 8,
            width: i === activeSlideIndex ? 30 : 8,
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            alignItems: 'center',
          }}
        />
      ))}
    </Box>
  )
}
