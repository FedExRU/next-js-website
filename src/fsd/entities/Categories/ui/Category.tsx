'use client'

import { LAYOUT, skeletonImage } from '@fsd/shared'
import { Box, Grid2 as Grid, Skeleton, Typography } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

import { getStyles } from './styles'
import { CategoryProps } from './types'

export const Category: FC<CategoryProps> = ({
  image,
  layout = 'primary',
  name,
  renderAction,
  skeleton,
}) => {
  const isPrimary = layout === LAYOUT.PRIMARY

  const { styles } = getStyles(isPrimary, skeleton)

  return (
    <Box sx={styles.category}>
      <Grid
        alignItems={isPrimary ? 'flex-start' : 'end'}
        container
        spacing={{ sm: 3, xs: 2 }}
        sx={{ width: '100%' }}
      >
        <Grid size={isPrimary ? 12 : 6}>
          <Box>
            <Typography component="p" noWrap sx={styles.categoryName}>
              {skeleton ? <Skeleton sx={styles.categoryNameSkeleton} /> : name}
            </Typography>
            {renderAction && (
              <Box sx={styles.categoryAction}>{renderAction()}</Box>
            )}
          </Box>
        </Grid>
        <Grid size={isPrimary ? 12 : 6}>
          <Box sx={styles.categoryImageWrapper}>
            {skeleton && <Skeleton sx={styles.categoryImageSkeleton} />}
            <Image
              alt={(name as string) || ''}
              height={0}
              sizes="100vw"
              src={skeleton ? skeletonImage : (image as string)}
              style={{
                height: '100%',
                width: '100%',
              }}
              width={0}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
