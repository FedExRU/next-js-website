'use client'

import { Box } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

import { getSliderItemImageProps } from '../../utils'
import wrapperImage from './assets/wrapper.webp'
import { getStyles } from './styles'
import { SliderWrapperProps } from './types'

export const SliderWrapper: FC<SliderWrapperProps> = ({ children }) => {
  const { sx, ...rest } = getSliderItemImageProps()
  const { styles } = getStyles()

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          ...sx,
        }}
      >
        <Image {...rest} alt="" src={wrapperImage} />
      </Box>
      <Box sx={styles.sliderWrapper}>{children}</Box>
    </Box>
  )
}
