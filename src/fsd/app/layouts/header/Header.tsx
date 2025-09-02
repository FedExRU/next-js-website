'use client'

import { DEFAULT_HEADER_HEIGHT } from '@fsd/shared/lib'
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
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return (
    <>
      <AppBar color="default" elevation={trigger ? 6 : 0} position="fixed">
        <Container>
          <Toolbar disableGutters>
            <Menu />
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ mt: DEFAULT_HEADER_HEIGHT }} />
    </>
  )
}
