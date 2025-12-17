'use client'

import { Box, Grid } from '@mui/material'
import Image from 'next/image'

import { skeletonImage } from '../../../shared/assets'
import { toDecimalString } from '../../../shared/lib'
import { Skeleton, Typography } from '../../../shared/ui'
import { Badges } from './badges'
import { Price } from './price'
import { getStyles } from './styles'
import { ProductProps } from './types'

export const Product: React.FC<ProductProps> = ({
  discountPercentage,
  discountPrice,
  image,
  isFavorite,
  isNew,
  name,
  price,
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
              (image && (
                <Image
                  alt={(name as string) || ''}
                  height={0}
                  sizes="100vw"
                  src={skeleton ? skeletonImage : (image as string)}
                  style={styles.productImage as React.CSSProperties}
                  width={0}
                />
              )) ||
              null
            )}
            {!skeleton && (
              <Box sx={styles.productInfo}>
                <Grid container>
                  <Grid size="grow">
                    <Badges
                      discountPercent={discountPercentage}
                      isNew={isNew}
                    />
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
                  valueDiscount={
                    discountPrice ? toDecimalString(discountPrice) : undefined
                  }
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
