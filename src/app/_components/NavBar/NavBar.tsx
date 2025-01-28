'use client'

import { useMediaQuery, useTheme } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import { NavBarDesktop } from './_components'
import { NavBarRoutes } from './constants'
import { NavBarProps } from './types'

export const NavBar: FC<NavBarProps> = () => {
  const currentPath = usePathname()
  const theme = useTheme()

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <AppBar color="default" elevation={0} position="static">
      <Container>
        <Toolbar disableGutters>
          {isDesktop ? (
            <NavBarDesktop currentPath={currentPath} routes={NavBarRoutes} />
          ) : (
            <h1>123</h1>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
