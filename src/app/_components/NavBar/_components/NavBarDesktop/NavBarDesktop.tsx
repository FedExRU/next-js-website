import { FC, memo } from 'react'
import Box from '@mui/material/Box'
import Link from 'next/link'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { NavBarDesktopProps } from './types'
import { NavBarTools } from './NavBarTools'
import { SiteLogo } from 'components/Logos'

export const NavBarDesktop: FC<NavBarDesktopProps> = memo(
  ({ currentPath, routes }) => {
    return (
      <Box
        sx={{
          width: '100%',
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
        }}
      >
        <Button
          component={Link}
          href="/"
          sx={{
            borderBottom: 'none',
            display: 'flex',
            paddingLeft: 1,
            paddingRight: 1,
            marginLeft: -1,
            marginRight: -1,
          }}
          aria-label="3legant"
        >
          <SiteLogo />
        </Button>
        <Box
          component="nav"
          sx={{ margin: 'auto', display: { xs: 'none', md: 'flex' } }}
        >
          <Box
            component="ul"
            sx={theme => ({
              padding: 0,
              margin: theme.spacing(0, 5),
              display: 'flex',
            })}
          >
            {routes.map(({ path, id, label }) => (
              <Box
                component="li"
                key={id}
                sx={theme => ({
                  listStyle: 'none',
                  padding: theme.spacing(0, 2.5),
                })}
              >
                <Typography
                  variant="button"
                  component={Link}
                  href={path}
                  sx={theme => ({
                    transition: theme.transitions.create('color'),
                    display: 'flex',
                    textTransform: 'capitalize',
                    color:
                      currentPath === path ? 'text.primary' : 'text.secondary',
                    textDecoration: 'none',
                    fontWeight: 'medium',
                    '&:hover': {
                      color: 'common.black',
                    },
                  })}
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
