'use client'

import { ROUTES } from '@fsd/shared/routes'
import { Typography } from '@fsd/shared/ui'
import { Box } from '@mui/material'
import Link from 'next/link'

import { getStyles } from './styles'

const { styles } = getStyles()
export const Menu: React.FC = () => {
  return (
    <Box component="nav" sx={styles.menu}>
      <Box component="ul" sx={styles.menuList}>
        {Object.values(ROUTES).map(({ id, label, path }) => (
          <Box component="li" key={id} sx={styles.menuListItem}>
            <Typography
              component={Link}
              // @ts-expect-error href property missmatch
              href={path}
              sx={styles.menuListItemLink}
              variant="caption1"
            >
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
