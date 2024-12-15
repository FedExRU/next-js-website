'use client'

import React, { FC, useState } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import { MainSliderItemProps } from './types'
import fallbackImage from './assets/fallback.webp'
import { getStyles } from './styles'
import { getSliderItemImageProps } from '@fsd/shared'

export const MainSliderItem: FC<MainSliderItemProps> = ({
  id,
  title,
  url,
  image,
}) => {
  const { sx, ...rest } = getSliderItemImageProps()
  const [isLoadingFailed, setIsLoadingFailed] = useState(false)
  const { styles } = getStyles(isLoadingFailed)

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
        <Image
          alt={title as string}
          src={isLoadingFailed ? fallbackImage : (image as string)}
          onError={() => {
            setIsLoadingFailed(true)
          }}
          {...rest}
        />
      </Box>
    </Box>
  )
}
