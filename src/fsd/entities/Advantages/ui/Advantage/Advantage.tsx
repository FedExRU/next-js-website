import { Box } from '@mui/material'
import { FC } from 'react'
import { AdvantageProps } from './types'
import { getStyles } from './styles'
import { Typography } from '@fsd/shared'

export const Advantage: FC<AdvantageProps> = ({ description, icon, title }) => {
  const { styles } = getStyles()

  return (
    <Box sx={styles.advantage}>
      <Box sx={styles.icon}>{icon}</Box>
      <Box sx={{ mb: 1 }}></Box>
      <Typography variant={{ xs: 'caption1Semi', sm: 'h7' }} component="p">
        {title}
      </Typography>
      <Typography
        variant={{ xs: 'caption1', sm: 'body2' }}
        component="p"
        color="textSecondary"
        sx={styles.description}
      >
        {description}
      </Typography>
    </Box>
  )
}
