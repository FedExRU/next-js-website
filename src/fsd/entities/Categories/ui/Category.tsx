'use client'

import { Box, Grid2 as Grid, Skeleton, Typography } from '@mui/material'
import { FC } from 'react'
import Image from 'next/image'
import { CategoryProps } from './types'
import skeletonImage from './assets/skeletonImage.webp'

export const Category: FC<CategoryProps> = ({
  image,
  skeleton,
  name,
  layout = 'primary',
  renderActionButton,
}) => {
  const isPrimary = layout === 'primary'
  return (
    <Box
      sx={{
        p: {
          xs: 4,
          md: isPrimary ? 6 : 4,
        },
        pr: {
          xs: isPrimary ? 4 : 3,
        },
        backgroundColor: 'grey.200',
        height: '100%',
        display: 'flex',
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
        alignItems={isPrimary ? 'flex-start' : 'end'}
      >
        <Grid size={isPrimary ? 12 : 6}>
          <Box>
            <Typography
              component="p"
              noWrap
              sx={theme => ({
                minHeight: 41,
                [theme.breakpoints.up('sm')]: {
                  ...theme.typography.h5,
                },
                [theme.breakpoints.down('sm')]: {
                  ...theme.typography.h6,
                },
              })}
            >
              {skeleton ? (
                <Skeleton
                  sx={{
                    width: '100%',
                    maxWidth: 201,
                    height: { xs: 34, sm: 38 },
                    transform: 'none',
                  }}
                />
              ) : (
                name
              )}
            </Typography>
            {renderActionButton && (
              <Box sx={{ mt: 1, sm: isPrimary ? 0 : 2 }}>
                {renderActionButton()}
              </Box>
            )}
          </Box>
        </Grid>
        <Grid size={isPrimary ? 12 : 6}>
          <Box
            sx={{
              position: 'relative',
              '& img': {
                position: 'relative !important',
                objectFit: 'contain',
                objectPosition: 'bottom',
                opacity: skeleton ? 0 : 1,
                maxHeight: {
                  xs: 'none',
                  sm: isPrimary ? 'none' : 286,
                },
                minHeight: {
                  xs: 'auto',
                  sm: isPrimary ? 'auto' : 286,
                },
              },
            }}
          >
            {skeleton && (
              <Skeleton
                sx={{
                  transform: 'none',
                  top: 0,
                  left: 0,
                  position: 'absolute',
                  zIndex: 1,
                  height: '100%',
                  width: '100%',
                }}
              />
            )}
            <Image
              alt={(name as string) || ''}
              src={skeleton ? skeletonImage : (image as string)}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
