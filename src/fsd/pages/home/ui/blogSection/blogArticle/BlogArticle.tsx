'use client'

import { skeletonImage } from '@fsd/shared/assets'
import { Skeleton, Typography } from '@fsd/shared/ui'
import { Box, Grid } from '@mui/material'
import Image from 'next/image'

import { getBlogArticleStyles as getStyles } from './styles'
import { BlogArticleProps } from './types'

export const BlogArticle: React.FC<BlogArticleProps> = ({
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
                style={styles.articleImage as React.CSSProperties}
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
