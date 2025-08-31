'use client'

import { skeletonImage } from '@fsd/shared/assets'
import { LAYOUT } from '@fsd/shared/lib'
import { Box, Grid, Skeleton, Typography } from '@mui/material'
import Image from 'next/image'

import { getCategoryStyles as getStyles } from './styles'
import { BannerCategoryProps } from './types'

export const BannerCategory: React.FC<BannerCategoryProps> = ({
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
        sx={styles.categoryGrid}
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
              style={styles.categoryImage as React.CSSProperties}
              width={0}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
