import { Box } from '@mui/material'
import { usePathname } from 'next/navigation'

import { VIEW } from '../../lib'
import { MenuListItem } from './menuListItem'
import { getStyles } from './styles'
import { MenuListProps } from './types'

export const MenuList: React.FC<MenuListProps> = ({
  items,
  view = VIEW.DESKTOP,
}) => {
  const currentPath = usePathname()

  const { styles } = getStyles({ view })

  return (
    <Box component="nav" sx={styles.menu}>
      <Box component="ul" sx={styles.menuList}>
        {items?.map(({ icon, id, label, path }) => (
          <MenuListItem
            icon={icon}
            isActive={currentPath === path}
            key={id}
            path={path}
            view={view}
          >
            {label}
          </MenuListItem>
        ))}
      </Box>
    </Box>
  )
}
