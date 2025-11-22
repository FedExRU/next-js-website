import Box from '@mui/material/Box'

import { getStyles } from './styles'
import { ProductColorProps } from './types'

export const ProductColor: React.FC<ProductColorProps> = ({ value }) => {
  const { styles } = getStyles({ value })

  return <Box sx={styles.color} />
}
