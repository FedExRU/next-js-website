import { Product } from '@frontend/entities/products'
import Grid from '@mui/material/Grid'

import { ProductsLoaderProps } from './types'

export const ProductsLoader: React.FC<ProductsLoaderProps> = ({
  firstSkeletonRef,
  size,
}) => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <Grid
          key={index}
          ref={index === 0 ? firstSkeletonRef : undefined}
          size={size}
        >
          <Product skeleton />
        </Grid>
      ))}
    </>
  )
}
