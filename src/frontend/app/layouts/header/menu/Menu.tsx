import React from 'react'

import { useAdaptive, VIEW } from '../../../../shared/lib'
import { ROUTES } from '../../../../shared/routes'
import { MenuList } from '../../../../shared/ui'
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
