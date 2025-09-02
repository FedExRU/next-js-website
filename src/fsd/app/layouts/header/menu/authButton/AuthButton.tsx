import { VIEW } from '@fsd/shared/lib'
import { AUTH_ROUTES } from '@fsd/shared/routes'

import { AuthButtonDesktop } from './authButtonDesktop'
import { AuthButtonMobile } from './authButtonMobile'
import { AuthButtonProps } from './types'

export const AuthButton: React.FC<AuthButtonProps> = ({
  view = VIEW.DESKTOP,
}) => {
  const AuthButtonComponent =
    view === VIEW.MOBILE ? AuthButtonMobile : AuthButtonDesktop

  return <AuthButtonComponent path={AUTH_ROUTES.LOGIN.path} />
}
