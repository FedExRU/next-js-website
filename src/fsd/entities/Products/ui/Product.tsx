'use client'

import {
  Box,
  Grid2 as Grid,
  Rating,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { FC } from 'react'
import Image from 'next/image'
import { ProductProps } from './types'
import { Badges, Price } from './components'
import { getStyles } from './styles'
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
  renderAction,
  renderActionSecondary,
  isFavorite,
}) => {
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const { styles, classes } = getStyles(isTablet, isFavorite)

  return (
    <Box sx={styles.product}>
      <Grid container spacing={1.5}>
        <Grid size={12}>
          <Box sx={styles.productImage}>
            {skeleton ? (
              <Skeleton sx={styles.productImageSkeleton} />
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
              <Box sx={styles.productInfo}>
                <Grid container>
                  <Grid size="grow">
                    <Badges discountPercent={discountPercent} isNew={isNew} />
                  </Grid>
                  {renderActionSecondary && (
                    <Grid size="grow">
                      <Box
                        className={classes.actionSecondary}
                        sx={styles.productFavorite}
                      >
                        {renderActionSecondary?.(isFavorite)}
                      </Box>
                    </Grid>
                  )}
                </Grid>
              </Box>
            )}
            {!skeleton && renderAction && (
              <Box sx={styles.productAction}>
                <Box
                  className={classes.action}
                  sx={styles.productActionWrapper}
                >
                  {renderAction?.()}
                </Box>
              </Box>
            )}
          </Box>
        </Grid>
        <Grid size={12}>
          <Grid container spacing={0.5}>
            <Grid size={12}>
              <Box sx={styles.productRating}>
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
              <Box sx={styles.productPrice}>
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
