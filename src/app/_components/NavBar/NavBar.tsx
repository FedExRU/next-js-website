'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import { useMediaQuery, useTheme } from '@mui/material'
import { NavBarProps } from './types'
import { NavBarDesktop } from './_components'
import { NavBarRoutes } from './constants'

export const NavBar: FC<NavBarProps> = () => {
  const currentPath = usePathname()
  const theme = useTheme()

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Container>
        <Toolbar disableGutters>
          {isDesktop ? (
            <NavBarDesktop routes={NavBarRoutes} currentPath={currentPath} />
          ) : (
            <h1>123</h1>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
