'use client'

import { Box, Typography } from '@mui/material'
import Link from 'next/link'

import { VIEW } from '../../../lib'
import { getStyles } from './styles'
import { MenuListItemProps } from './types'

export const MenuListItem: React.FC<
  React.PropsWithChildren<MenuListItemProps>
> = ({ children, icon, isActive, path = '', view = VIEW.DESKTOP }) => {
  const { styles } = getStyles({ isActive, view })

  return (
    <Box component="li" sx={styles.menuItem}>
      <Typography
        component={Link}
        href={path}
        sx={styles.menuItemText}
        variant="button"
      >
        {children}
      </Typography>
      {icon && (
        <Box component="span" sx={styles.menuItemIcon}>
          {icon}
        </Box>
      )}
    </Box>
  )
}
