'use client'

import { FC } from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import { getSliderItemImageProps } from '../../utils'
import { SliderWrapperProps } from './types'
import wrapperImage from './assets/wrapper.webp'
import { getStyles } from './styles'

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
