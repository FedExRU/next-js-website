import { COMMON_ROUTES } from '@fsd/shared/routes'
import { HeartIconOutlined, IconButton } from '@fsd/shared/ui'
import { Badge, Tooltip } from '@mui/material'
import Link from 'next/link'

import { getStyles } from './styles'

const { styles } = getStyles()

import { TOOLTIP_TEXT } from './constants'
import { getAriaLabel } from './utils'

export const WishlistButton: React.FC = () => {
  return (
    <Tooltip arrow title={TOOLTIP_TEXT}>
      <IconButton
        aria-label={getAriaLabel(3)}
        color="primary"
        component={Link}
        href={COMMON_ROUTES.WISHLIST.path}
        noElevation
        sx={styles.cartButton}
      >
        <Badge badgeContent={3} color="primary">
          <HeartIconOutlined />
        </Badge>
      </IconButton>
    </Tooltip>
  )
}
