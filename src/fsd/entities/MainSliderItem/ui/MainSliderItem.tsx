'use client'

import React, { FC } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import { MainSliderItemProps } from './types'
import { getStyles } from './styles'
import { getSliderItemImageProps } from '@fsd/shared'

export const MainSliderItem: FC<MainSliderItemProps> = ({
  id,
  title,
  url,
  image,
}) => {
  const { sx, ...rest } = getSliderItemImageProps()
  const { styles } = getStyles()

  return (
    <Box data-slider-id={id} sx={styles.mainSliderItem}>
      <Box
        component="a"
        href={url}
        sx={{
          ...sx,
          ...styles.mainSliderItemWrapper,
        }}
      >
        <Image alt={title as string} src={image as string} {...rest} />
      </Box>
    </Box>
  )
}
