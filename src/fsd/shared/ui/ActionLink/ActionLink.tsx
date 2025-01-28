import Link from 'next/link'

import { Button } from '../Button'
import { ArrowRightMediumIcon } from '../Icons'
import { ActionLinkProps } from './types'

export const ActionLink: React.FC<ActionLinkProps> = ({ text, to = '#' }) => (
  <Button
    component={Link}
    href={to}
    size={{
      sm: 'small',
      xs: 'xSmall',
    }}
    sx={{
      px: '0 !important',
    }}
    variant="text"
  >
    {text}
    <ArrowRightMediumIcon sx={{ '& path': { strokeWidth: 1.25 }, pl: 0.5 }} />
  </Button>
)
