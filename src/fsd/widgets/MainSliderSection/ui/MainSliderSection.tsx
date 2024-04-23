'use client'

import { Box, Grid } from '@mui/material'
import { MainSliderItem, useGetMainSliderItemsQuery } from '@fsd/entities'
import { Slider, Typography } from '@fsd/shared'

export const MainSliderSection = () => {
  const { data, isLoading } = useGetMainSliderItemsQuery()

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Slider isLoading={isLoading}>
            {data?.items?.map(({ id, ...rest }) => (
              <MainSliderItem key={id} id={id} {...rest} />
            ))}
          </Slider>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} md={7}>
              <Typography
                component="h1"
                variant={{
                  md: 'h2',
                  sm: 'h3',
                  xs: 'h4',
                }}
                sx={theme => ({
                  display: 'flex',
                  flexDirection: 'column',
                  [theme.breakpoints.between('sm', 'md')]: {
                    textAlign: 'center',
                  },
                })}
              >
                <Box component="span">
                  Simply Unique
                  <Box component="span" color="text.secondary">
                    /
                  </Box>
                </Box>
                <Box component="span">
                  Simply Better
                  <Box component="span" color="text.secondary">
                    .
                  </Box>
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  display: {
                    xs: 'block',
                    md: 'flex',
                  },
                  alignItems: {
                    md: 'center',
                  },
                  height: '100%',
                  width: '100%',
                }}
              >
                <Typography
                  variant={{
                    md: 'body2',
                    xs: 'caption1',
                  }}
                  sx={theme => ({
                    [theme.breakpoints.between('sm', 'md')]: {
                      textAlign: 'center',
                    },
                  })}
                  component="p"
                  color="text.secondary"
                >
                  <Typography
                    variant={{
                      md: 'body2Semi',
                      xs: 'caption1Semi',
                    }}
                    component="span"
                    color="text.primary"
                  >
                    3legant
                  </Typography>{' '}
                  is a gift & decorations store based in HCMC, Vietnam. Est
                  since 2019.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
