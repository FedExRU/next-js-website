import { NotificationsPortalLazy as NotificationsPortal } from '@fsd/widgets/notifications'

import { Footer } from './footer'
import { Header } from './header'

export const ShopLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <NotificationsPortal />
    </>
  )
}
