import { Skeleton, Typography } from '@fsd/shared/ui'
import { Box } from '@mui/material'
import DOMPurify from 'dompurify'
import React from 'react'

import { getAdvantageStyles as getStyles } from './styles'
import { AdvantageProps } from './types'

export const Advantage: React.FC<AdvantageProps> = ({
  description,
  icon,
  skeleton,
  title,
}) => {
  const { styles } = getStyles()

  return (
    <Box sx={styles.advantage}>
      {skeleton ? (
        <Skeleton height={48} sx={styles.iconWrapper} width={48} />
      ) : (
        <Box
          dangerouslySetInnerHTML={{
            __html: icon ? DOMPurify.sanitize(icon) : '',
          }}
          sx={styles.iconWrapper}
        />
      )}
      <Box sx={{ mb: 1 }}></Box>
      {skeleton ? (
        <Skeleton height={24} width={139} />
      ) : (
        <Typography component="p" variant={{ sm: 'h7', xs: 'caption1Semi' }}>
          {title}
        </Typography>
      )}
      {skeleton ? (
        <Skeleton height={24} sx={{ mt: 0.5 }} width="100%" />
      ) : (
        <Typography
          color="textSecondary"
          component="p"
          sx={styles.description}
          variant={{ sm: 'body2', xs: 'caption1' }}
        >
          {description}
        </Typography>
      )}
    </Box>
  )
}
