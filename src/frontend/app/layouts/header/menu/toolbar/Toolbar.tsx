import { Box, Grid } from '@mui/material'

import { getStyles } from './styles'
import { ToolbarProps } from './types'

const { styles } = getStyles()

export const Toolbar: React.FC<ToolbarProps> = ({ slots = {} }) => {
  const { auth, cart, siteSearch } = slots
  return (
    <Grid container spacing={1}>
      {siteSearch && (
        <Grid size="auto">
          <Box sx={styles.toolbarItem}>{siteSearch}</Box>
        </Grid>
      )}
      {auth && (
        <Grid size="auto">
          <Box sx={styles.toolbarItem}>{auth}</Box>
        </Grid>
      )}
      {cart && (
        <Grid size="auto">
          <Box sx={styles.toolbarItem}>{cart}</Box>
        </Grid>
      )}
    </Grid>
  )
}
