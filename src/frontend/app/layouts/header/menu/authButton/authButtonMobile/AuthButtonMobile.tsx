import Link from 'next/link'

import { Button } from '../../../../../../shared/ui'
import { AuthButtonMobileProps } from './types'

export const AuthButtonMobile: React.FC<AuthButtonMobileProps> = ({ path }) => {
  return (
    <Button
      component={Link}
      fullWidth
      href={path}
      sx={{ height: 'auto' }}
      variant="contained"
    >
      Sign In
    </Button>
  )
}
