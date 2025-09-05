import Link from 'next/link'

import { Button } from '../button'
import { ArrowRightMediumIcon } from '../icons'
import { getStyles } from './styles'
import { ActionButtonLinkProps } from './types'

const { styles } = getStyles()

export const ActionButtonLink: React.FC<ActionButtonLinkProps> = ({
  text,
  to = '#',
}) => (
  <Button
    component={Link}
    href={to}
    size={{
      sm: 'small',
      xs: 'xSmall',
    }}
    sx={styles.actionButtonLink}
    variant="text"
  >
    {text}
    <ArrowRightMediumIcon sx={styles.icon} />
  </Button>
)
