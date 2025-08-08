'use client'

import { COPYRIGHT_ROUTES, Typography } from '@fsd/shared'
import { Box, Grid } from '@mui/material'
import Link from 'next/link'

import { getStyles } from './styles'

const year = new Date().getFullYear()

export const Copyright: React.FC = () => {
  const { styles } = getStyles()

  return (
    <Grid container spacing={3.5}>
      <Grid order={{ md: 1, xs: 2 }} size={{ md: 'auto', xs: 12 }}>
        <Typography sx={styles.copyrightText} variant="caption2">
          Copyright © {year} 3legant. All rights reserved
        </Typography>
      </Grid>
      <Grid order={{ md: 2, xs: 1 }} size={{ md: 'auto', xs: 12 }}>
        <Box component="nav" sx={styles.copyright}>
          <Box component="ul" sx={styles.copyrightList}>
            {Object.values(COPYRIGHT_ROUTES).map(({ id, label, path }) => (
              <Box component="li" key={id} sx={styles.copyrightListItem}>
                <Typography
                  component={Link}
                  // @ts-expect-error href property missmatch
                  href={path}
                  sx={styles.copyrightListItemLink}
                  variant="caption2Bold"
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
