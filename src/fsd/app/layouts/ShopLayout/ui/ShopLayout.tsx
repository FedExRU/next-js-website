'use client'

import { Footer, Header } from '@fsd/widgets'

export const ShopLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
