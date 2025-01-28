import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { SiteLogo } from 'components/Logos'
import Link from 'next/link'
import { FC, memo } from 'react'

import { NavBarTools } from './NavBarTools'
import { NavBarDesktopProps } from './types'

export const NavBarDesktop: FC<NavBarDesktopProps> = memo(
  ({ currentPath, routes }) => {
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
                  href={path}
                  sx={theme => ({
                    '&:hover': {
                      color: 'common.black',
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
        <NavBarTools />
      </Box>
    )
  },
)

NavBarDesktop.displayName = 'NavBarDesktop'
