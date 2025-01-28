import { Typography } from '@fsd/shared'
import { Box, Grid2 as Grid } from '@mui/material'
import * as React from 'react'
import { FC } from 'react'

export const WelcomeText: FC = () => (
  <Grid size={12}>
    <Grid container spacing={{ md: 3, xs: 2 }}>
      <Grid size={{ md: 7, xs: 12 }}>
        <Typography
          component="h1"
          sx={theme => ({
            display: 'flex',
            flexDirection: 'column',
            [theme.breakpoints.between('sm', 'md')]: {
              textAlign: 'center',
            },
          })}
          variant={{
            md: 'h2',
            sm: 'h3',
            xs: 'h4',
          }}
        >
          <Box component="span">
            Simply Unique
            <Box color="text.secondary" component="span">
              /
            </Box>
          </Box>
          <Box component="span">
            Simply Better
            <Box color="text.secondary" component="span">
              .
            </Box>
          </Box>
        </Typography>
      </Grid>
      <Grid size={{ md: 5, xs: 12 }}>
        <Box
          sx={{
            alignItems: {
              md: 'center',
            },
            display: {
              md: 'flex',
              xs: 'block',
            },
            height: '100%',
            width: '100%',
          }}
        >
          <Typography
            color="text.secondary"
            component="p"
            sx={theme => ({
              [theme.breakpoints.between('sm', 'md')]: {
                textAlign: 'center',
              },
            })}
            variant={{
              sm: 'body2',
              xs: 'caption1',
            }}
          >
            <Typography
              color="text.primary"
              component="span"
              variant={{
                sm: 'body2Semi',
                xs: 'caption1Semi',
              }}
            >
              3legant
            </Typography>{' '}
            is a gift & decorations store based in HCMC, Vietnam. Est since
            2019.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Grid>
)
