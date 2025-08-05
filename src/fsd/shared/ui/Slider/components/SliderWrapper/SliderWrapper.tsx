'use client'

import { Box } from '@mui/material'
import Image from 'next/image'

import { getSliderItemImageProps } from '../../utils'
import wrapperImage from './assets/wrapper.webp'
import { getStyles } from './styles'
import { SliderWrapperProps } from './types'

const { styles } = getStyles()

export const SliderWrapper: React.FC<SliderWrapperProps> = ({ children }) => {
  const { sx, ...rest } = getSliderItemImageProps()

  return (
    <Box sx={styles.wrapper}>
      <Box sx={sx}>
        <Image {...rest} alt="" src={wrapperImage} />
      </Box>
      <Box sx={styles.sliderWrapper}>{children}</Box>
    </Box>
  )
}
