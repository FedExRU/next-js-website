'use client'

import { Box } from '@mui/material'
import Image from 'next/image'

import { getSliderItemImageProps } from '../utils'
import wrapperImage from './assets/wrapper.webp'
import { getStyles } from './styles'
import { SliderWrapperProps } from './types'

export const SliderWrapper: React.FC<
  React.PropsWithChildren<SliderWrapperProps>
> = ({ children, withBackdrop }) => {
  const { sx, ...rest } = getSliderItemImageProps()
  const { styles } = getStyles({ withBackdrop })

  return (
    <Box sx={styles.wrapper}>
      <Box sx={sx}>
        <Image {...rest} alt="Slider Backdrop Image" src={wrapperImage} />
      </Box>
      <Box sx={styles.sliderWrapper}>{children}</Box>
    </Box>
  )
}
