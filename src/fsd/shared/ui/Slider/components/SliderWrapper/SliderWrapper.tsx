'use client'

import { FC } from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import { getSliderItemImageProps } from '../../utils'
import { SliderWrapperProps } from './types'
import wrapperImage from './assets/wrapper.webp'

export const SliderWrapper: FC<SliderWrapperProps> = ({ children }) => {
  const { sx, ...rest } = getSliderItemImageProps()

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          ...sx,
        }}
      >
        <Image {...rest} alt="" src={wrapperImage} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: 'grey.200',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
