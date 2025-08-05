'use client'

import { getSliderItemImageProps } from '@fsd/shared'
import { Box } from '@mui/material'
import Image from 'next/image'

import { getStyles } from './styles'
import { MainSliderItemProps } from './types'

export const MainSliderItem: React.FC<MainSliderItemProps> = ({
  id,
  image,
  title,
  url,
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
        tabIndex={-1}
      >
        <Image alt={title as string} src={image as string} {...rest} />
      </Box>
    </Box>
  )
}
