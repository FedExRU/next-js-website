'use client'

import React, { FC, useState } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import { MainSliderItemProps } from './types'
import fallbackImage from './assets/fallback.webp'
import { getSliderItemImageProps } from '@fsd/shared'

export const MainSliderItem: FC<MainSliderItemProps> = ({
  id,
  title,
  url,
  image,
}) => {
  const { sx, ...rest } = getSliderItemImageProps()
  const [isLoadingFailed, setIsLoadingFailed] = useState(false)

  return (
    <Box
      data-slider-id={id}
      sx={{
        height: '100%',
        width: '100%',
        position: 'relative',
        maxHeight: 536,
      }}
    >
      <Box
        component="a"
        href={url}
        sx={{
          display: 'flex',
          position: 'relative',
          ...sx,
          opacity: isLoadingFailed ? 0.1 : 1,
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
