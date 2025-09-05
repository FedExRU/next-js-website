'use client'

import { DEFAULT_HEADER_HEIGHT } from '@fsd/shared/lib'
import { MenuBanner } from '@fsd/widgets/banners'
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  useScrollTrigger,
} from '@mui/material'
import React from 'react'

import { Menu } from './menu'

export const Header: React.FC = () => {
  const [menuOffset, setMenuOffset] = React.useState(DEFAULT_HEADER_HEIGHT)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  const appBarRef = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    const clientHeight = appBarRef.current?.clientHeight
    setMenuOffset(
      clientHeight
        ? `${appBarRef.current?.clientHeight}px`
        : DEFAULT_HEADER_HEIGHT,
    )
  }, [])

  return (
    <>
      <AppBar
        color="default"
        elevation={trigger ? 6 : 0}
        position="fixed"
        ref={appBarRef}
        sx={{
          transition: 'height 0.3s ease-in-out',
        }}
      >
        <MenuBanner />
        <Container>
          <Toolbar disableGutters>
            <Menu />
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ mt: menuOffset }} />
    </>
  )
}
