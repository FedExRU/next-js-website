'use client'

import { DEFAULT_HEADER_HEIGHT, useIsDesktop } from '@fsd/shared'
import { AppBar, Box, Container, Toolbar } from '@mui/material'

import { MenuHeader } from '../../../MenuHeader'
import { SiteSearch } from '../../../SiteSearch'

export const Header: React.FC = () => {
  const isDesktop = useIsDesktop()

  if (isDesktop) {
    return (
      <>
        <AppBar color="default" elevation={0} position="fixed">
          <Container>
            <Toolbar disableGutters>
              <MenuHeader
                slots={{
                  toolbar: <SiteSearch />,
                }}
              />
            </Toolbar>
          </Container>
        </AppBar>
        <Box sx={{ mt: DEFAULT_HEADER_HEIGHT }} />
      </>
    )
  }
}
