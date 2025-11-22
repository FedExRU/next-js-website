import LinearProgress from '@mui/material/LinearProgress'

import { Typography } from '../typography'
import { getStyles } from './styles'
import { FetcherProps } from './types'

export const Fetcher: React.FC<FetcherProps> = ({
  height,
  isLoading,
  isVisible,
  loadingText = 'Loading...',
  onClick,
  text = 'Fetch more data',
}) => {
  if (!isVisible && !isLoading) {
    return null
  }

  const { styles } = getStyles({ height, isLoading })

  return (
    <Typography
      component="span"
      onClick={isLoading ? undefined : onClick}
      sx={styles.root}
      variant="body2Semi"
    >
      {isLoading ? loadingText : text}
      {isLoading && <LinearProgress sx={styles.progress} />}
    </Typography>
  )
}
