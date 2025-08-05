'use client'

import { Box, IconButton } from '@mui/material'

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
        <IconButton
          aria-label={`Slide button number ${i + 1}`}
          key={i}
          onClick={makeHandleClick(i)}
          sx={theme => ({
            alignItems: 'center',
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            height: 8,
            padding: 0,
            transition: theme.transitions.create('width', {
              duration: theme.transitions.duration.leavingScreen,
              easing: theme.transitions.easing.sharp,
            }),
            width: i === activeSlideIndex ? 30 : 8,
          })}
        />
      ))}
    </Box>
  )
}
