'use client'

import { Box, Grid2 as Grid, Rating, Typography } from '@mui/material'
import { FC } from 'react'
import Image from 'next/image'
import { ProductProps } from './types'
import skeletonImage from './assets/skeletonImage.webp'
import { Price } from './components'
import { BadgeDiscount } from 'components/BadgeDiscount'
import { BadgeNew } from 'components/BadgeNew'

export const Product: FC<ProductProps> = ({
  image,
  skeleton = false,
  name,
  discountPercent,
  isNew,
  rating,
  price,
  priceDiscount,
}) => {
  const showBadges = !!discountPercent || isNew
  return (
    <Box sx={{ pb: 6 }}>
      <Grid container spacing={1.5}>
        <Grid size={12}>
          <Box sx={{ position: 'relative' }}>
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
            <Box
              sx={{
                position: 'absolute',
                height: 'calc(100% - 32px)',
                width: 'calc(100% - 32px)',
                top: 0,
                p: 2,
              }}
            >
              {showBadges && (
                <Grid container spacing={1}>
                  {isNew && (
                    <Grid size={12}>
                      <BadgeNew />
                    </Grid>
                  )}
                  {discountPercent && (
                    <Grid size={12}>
                      <BadgeDiscount value={discountPercent} />
                    </Grid>
                  )}
                </Grid>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid size={12}>
          <Grid container spacing={0.5}>
            <Grid size={12}>
              <Rating defaultValue={rating} precision={0.01} />
            </Grid>
            <Grid size={12}>
              <Typography variant="body2Semi">{name}</Typography>
            </Grid>
            <Grid size={12}>
              <Price value={price} valueDiscount={priceDiscount} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
