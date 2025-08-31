import { ROUTES } from '@fsd/shared/routes'
import { SiteLogo, Typography } from '@fsd/shared/ui'
import { Box, Button } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { Toolbar } from './toolbar'

export const Menu: React.FC = () => {
  const currentPath = usePathname()

  const routes = Object.values(ROUTES).sort(
    ({ id: firstElementId }, { id: secondElementId }) =>
      firstElementId - secondElementId,
  )
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: { md: 'flex', xs: 'none' },
        width: '100%',
      }}
    >
      <Button
        aria-label="3legant"
        component={Link}
        href="/"
        sx={{
          borderBottom: 'none',
          display: 'flex',
          marginLeft: -1,
          marginRight: -1,
          paddingLeft: 1,
          paddingRight: 1,
        }}
      >
        <SiteLogo />
      </Button>
      <Box
        component="nav"
        sx={{ display: { md: 'flex', xs: 'none' }, margin: 'auto' }}
      >
        <Box
          component="ul"
          sx={theme => ({
            display: 'flex',
            margin: theme.spacing(0, 5),
            padding: 0,
          })}
        >
          {routes.map(({ id, label, path }) => (
            <Box
              component="li"
              key={id}
              sx={theme => ({
                listStyle: 'none',
                padding: theme.spacing(0, 2.5),
              })}
            >
              <Typography
                component={Link}
                //@ts-expect-error href property missmatch
                href={path}
                sx={theme => ({
                  '@media (hover: hover)': {
                    '&:hover': {
                      color: 'common.black',
                    },
                  },
                  color:
                    currentPath === path ? 'text.primary' : 'text.secondary',
                  display: 'flex',
                  fontWeight: 'medium',
                  textDecoration: 'none',
                  textTransform: 'capitalize',
                  transition: theme.transitions.create('color'),
                })}
                variant="button"
              >
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Toolbar />
    </Box>
  )
}
