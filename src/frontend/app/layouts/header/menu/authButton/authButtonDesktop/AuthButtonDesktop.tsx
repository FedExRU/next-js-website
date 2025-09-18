import { Tooltip } from '@mui/material'
import Link from 'next/link'

import { IconButton, UserIcon } from '../../../../../../shared/ui'
import { getStyles } from './styles'

const { styles } = getStyles()

import { TOOLTIP_TEXT } from './constants'
import { AuthButtonDesktopProps } from './types'

export const AuthButtonDesktop: React.FC<AuthButtonDesktopProps> = ({
  path,
}) => {
  return (
    <Tooltip arrow describeChild title={TOOLTIP_TEXT}>
      <IconButton
        color="primary"
        component={Link}
        href={path ?? ''}
        noElevation
        sx={styles.authButton}
      >
        <UserIcon />
      </IconButton>
    </Tooltip>
  )
}
