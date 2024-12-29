import Link from 'next/link'
import { Button } from '../Button'
import { ArrowRightMediumIcon } from '../Icons'
import { ActionLinkProps } from './types'

export const ActionLink: React.FC<ActionLinkProps> = ({ to = '#', text }) => (
  <Button
    variant="text"
    size={{
      sm: 'small',
      xs: 'xSmall',
    }}
    component={Link}
    href={to}
    sx={{
      px: '0 !important',
    }}
  >
    {text}
    <ArrowRightMediumIcon sx={{ pl: 0.5, '& path': { strokeWidth: 1.25 } }} />
  </Button>
)
