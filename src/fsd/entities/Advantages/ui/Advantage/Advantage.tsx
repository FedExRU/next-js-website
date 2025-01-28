import { Typography } from '@fsd/shared'
import { Box } from '@mui/material'
import { FC } from 'react'

import { getStyles } from './styles'
import { AdvantageProps } from './types'

export const Advantage: FC<AdvantageProps> = ({ description, icon, title }) => {
  const { styles } = getStyles()

  return (
    <Box sx={styles.advantage}>
      <Box sx={styles.icon}>{icon}</Box>
      <Box sx={{ mb: 1 }}></Box>
      <Typography component="p" variant={{ sm: 'h7', xs: 'caption1Semi' }}>
        {title}
      </Typography>
      <Typography
        color="textSecondary"
        component="p"
        sx={styles.description}
        variant={{ sm: 'body2', xs: 'caption1' }}
      >
        {description}
      </Typography>
    </Box>
  )
}
