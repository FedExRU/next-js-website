'use client'

import { Box, Grid2 as Grid, Rating, Typography } from '@mui/material'
import { FC } from 'react'
import Image from 'next/image'
import { ProductProps } from './types'
import { Badges, Price } from './components'
import { Skeleton, skeletonImage } from '@fsd/shared'

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
  return (
    <Box sx={{ pb: 6 }}>
      <Grid container spacing={1.5}>
        <Grid size={12}>
          <Box sx={{ position: 'relative', minHeight: 357.5 }}>
            {skeleton ? (
              <Skeleton
                sx={{
                  width: '100%',
                  maxWidth: 262,
                  height: 357.5,
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
                  height: 'auto',
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
          </Box>
        </Grid>
        <Grid size={12}>
          <Grid container spacing={0.5}>
            <Grid size={12}>
              <Rating defaultValue={rating} precision={0.01} readOnly />
            </Grid>
            <Grid size={12}>
              {/** TODO: add skeletomn title */}
              <Typography variant="body2Semi">{name}</Typography>
            </Grid>
            <Grid size={12}>
              <Price
                value={price}
                valueDiscount={priceDiscount}
                skeleton={skeleton}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
