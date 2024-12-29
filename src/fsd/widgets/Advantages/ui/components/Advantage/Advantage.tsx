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
      <Typography variant="h7" component="p">
        {title}
      </Typography>
      <Typography variant="body2" component="p" color="textSecondary">
        {description}
      </Typography>
    </Box>
  )
}
