'use client'

import { Skeleton, skeletonImage, Typography } from '@fsd/shared'
import { Box, Grid2 as Grid } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

import { getStyles } from './styles'
import { ArticleProps } from './types'

export const Article: FC<ArticleProps> = ({
  imagePreview,
  name,
  renderAction,
  skeleton = false,
}) => {
  const { styles } = getStyles()

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid size={12}>
          <Box sx={styles.articleImageWrapper}>
            {skeleton ? (
              <Skeleton sx={styles.articleImageSkeleton} />
            ) : (
              <Image
                alt={(name as string) || ''}
                fill
                src={skeleton ? skeletonImage : (imagePreview as string)}
                style={{
                  objectFit: 'cover',
                }}
              />
            )}
          </Box>
        </Grid>
        <Grid size={12}>
          {skeleton ? (
            <Skeleton sx={styles.articleTitleSkeleton} />
          ) : (
            <Typography variant={{ sm: 'h7', xs: 'body2Semi' }}>
              {name}
            </Typography>
          )}
          {renderAction && <Box sx={{ mt: 1 }}>{renderAction()}</Box>}
        </Grid>
      </Grid>
    </Box>
  )
}
