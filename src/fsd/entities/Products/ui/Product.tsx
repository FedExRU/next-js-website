'use client'

import { skeletonImage } from '@fsd/shared/assets'
import { toDecimalString } from '@fsd/shared/lib'
import { Skeleton, Typography } from '@fsd/shared/ui'
import { Box, Grid, Rating } from '@mui/material'
import Image from 'next/image'

import { Badges, Price } from './components'
import { getStyles } from './styles'
import { ProductProps } from './types'

export const Product: React.FC<ProductProps> = ({
  discountPercent,
  image,
  isFavorite,
  isNew,
  name,
  price,
  priceDiscount,
  rating,
  renderAction,
  renderActionSecondary,
  skeleton = false,
}) => {
  const { classes, styles } = getStyles(isFavorite)

  return (
    <Box sx={styles.product}>
      <Grid container spacing={1.5}>
        <Grid size={12}>
          <Box sx={styles.productImageWrapper}>
            {skeleton ? (
              <Skeleton sx={styles.productImageSkeleton} />
            ) : (
              <Image
                alt={(name as string) || ''}
                height={0}
                sizes="100vw"
                src={skeleton ? skeletonImage : (image as string)}
                style={styles.productImage as React.CSSProperties}
                width={0}
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
                  <Skeleton height={16} width={85} />
                ) : (
                  <Rating defaultValue={rating} precision={0.01} readOnly />
                )}
              </Box>
            </Grid>
            <Grid size={12}>
              {skeleton ? (
                <Skeleton height={20} width={126} />
              ) : (
                <Typography variant="body2Semi">{name}</Typography>
              )}
            </Grid>
            <Grid size={12}>
              <Box sx={styles.productPrice}>
                <Price
                  skeleton={skeleton}
                  value={toDecimalString(price)}
                  valueDiscount={toDecimalString(priceDiscount)}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
