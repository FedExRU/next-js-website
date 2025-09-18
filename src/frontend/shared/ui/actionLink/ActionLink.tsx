import { Link as MuiLink } from '@mui/material'
import Link from 'next/link'

import { ArrowRightMediumIcon } from '../icons'
import { getStyles } from './styles'
import { ActionLinkProps } from './types'

const { styles } = getStyles()

export const ActionLink: React.FC<ActionLinkProps> = ({ text, to = '#' }) => (
  <MuiLink color="secondary" component={Link} href={to} sx={styles.actionLink}>
    {text}
    <ArrowRightMediumIcon sx={styles.icon} />
  </MuiLink>
)
