import { useAdaptive, VIEW } from '@fsd/shared/lib'
import { ROUTES } from '@fsd/shared/routes'
import { MenuList } from '@fsd/shared/ui'
import React from 'react'

import { MenuDesktop } from './menuDesktop'
import { MenuMobile } from './menuMobile'

const routes = Object.values(ROUTES).sort((a, b) => a.id - b.id)

export const Menu: React.FC = () => {
  const { isMobile, isTablet } = useAdaptive()

  const isMobileView = isMobile || isTablet

  const MenuComponent = isMobileView ? MenuMobile : MenuDesktop

  return (
    <MenuComponent>
      <MenuList
        items={routes}
        view={isMobileView ? VIEW.MOBILE : VIEW.DESKTOP}
      />
    </MenuComponent>
  )
}
