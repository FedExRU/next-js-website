'use client'

import { Box, Grid2 as Grid, Rating, Typography } from '@mui/material'
import { FC } from 'react'
import Image from 'next/image'
import { ProductProps } from './types'
import { Badges, Price } from './components'
import { Skeleton, skeletonImage, toDecimalString } from '@fsd/shared'

export const Product: FC<ProductProps> = ({
  image,
  skeleton = false,
  name,
  discountPercent,
  isNew,
  rating,
  price,
  priceDiscount,
  renderActionButton,
}) => {
  return (
    <Box sx={{ pb: 6 }}>
      <Grid container spacing={1.5}>
        <Grid size={12}>
          <Box sx={{ position: 'relative', height: { xs: 308, md: 357.5 } }}>
            {skeleton ? (
              <Skeleton
                sx={{
                  width: '100%',
                  height: '100%',
                  maxHeight: 348.99,
                  transform: 'none',
                }}
              />
            ) : (
              <Image
                alt={(name as string) || ''}
                src={skeleton ? skeletonImage : (image as string)}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            )}
            {!skeleton && (
              <Box
                sx={{
                  position: 'absolute',
                  height: 'calc(100% - 32px)',
                  width: 'calc(100% - 32px)',
                  top: 0,
                  p: 2,
                }}
              >
                <Badges discountPercent={discountPercent} isNew={isNew} />
              </Box>
            )}
            {!skeleton && renderActionButton && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  p: 2,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {renderActionButton?.()}
              </Box>
            )}
          </Box>
        </Grid>
        <Grid size={12}>
          <Grid container spacing={0.5}>
            <Grid size={12}>
              <Box sx={{ height: 32 }}>
                {skeleton ? (
                  <Skeleton width={85} height={16} />
                ) : (
                  <Rating defaultValue={rating} precision={0.01} readOnly />
                )}
              </Box>
            </Grid>
            <Grid size={12}>
              {skeleton ? (
                <Skeleton width={126} height={20} />
              ) : (
                <Typography variant="body2Semi">{name}</Typography>
              )}
            </Grid>
            <Grid size={12}>
              <Box sx={{ height: 32, display: 'flex', alignItems: 'end' }}>
                <Price
                  value={toDecimalString(price)}
                  valueDiscount={toDecimalString(priceDiscount)}
                  skeleton={skeleton}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
