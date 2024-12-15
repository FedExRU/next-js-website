'use client'

import { Box, Grid2 as Grid, Skeleton, Typography } from '@mui/material'
import { FC } from 'react'
import Image from 'next/image'
import { CategoryProps } from './types'
import { getStyles } from './styles'
import { skeletonImage } from '@fsd/shared'

export const Category: FC<CategoryProps> = ({
  image,
  skeleton,
  name,
  layout = 'primary',
  renderAction,
}) => {
  const isPrimary = layout === 'primary'

  const { styles } = getStyles(isPrimary, skeleton)

  return (
    <Box sx={styles.category}>
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
        sx={{ width: '100%' }}
        alignItems={isPrimary ? 'flex-start' : 'end'}
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
              src={skeleton ? skeletonImage : (image as string)}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
