import { Skeleton, Typography } from '@fsd/shared'
import { Box } from '@mui/material'

import { getStyles } from './styles'
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
      <Box sx={styles.icon}>
        {skeleton ? <Skeleton height={48} width={48} /> : icon}
      </Box>
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
