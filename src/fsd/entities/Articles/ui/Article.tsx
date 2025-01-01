'use client'

import { Box, Grid2 as Grid } from '@mui/material'
import { FC } from 'react'
import Image from 'next/image'
import { ArticleProps } from './types'
import { getStyles } from './styles'
import { Skeleton, skeletonImage, Typography } from '@fsd/shared'

export const Article: FC<ArticleProps> = ({
  imagePreview,
  skeleton = false,
  name,
  renderAction,
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
                src={skeleton ? skeletonImage : (imagePreview as string)}
                fill
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
            <Typography variant={{ xs: 'body2Semi', sm: 'h7' }}>
              {name}
            </Typography>
          )}
          {renderAction && <Box sx={{ mt: 1 }}>{renderAction()}</Box>}
        </Grid>
      </Grid>
    </Box>
  )
}
