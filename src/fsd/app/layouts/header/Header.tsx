'use client'

import { DEFAULT_HEADER_HEIGHT, useIsDesktop } from '@fsd/shared/lib'
import { AppBar, Box, Container, Toolbar } from '@mui/material'

import { Menu } from './menu'

export const Header: React.FC = () => {
  const isDesktop = useIsDesktop()

  if (isDesktop) {
    return (
      <>
        <AppBar color="default" elevation={0} position="fixed">
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
}
