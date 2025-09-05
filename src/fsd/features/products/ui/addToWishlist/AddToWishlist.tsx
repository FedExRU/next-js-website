import { HeartIconFilled, HeartIconOutlined, IconButton } from '@fsd/shared/ui'

import { AddToWishlistProps } from './types'

export const AddToWishlist: React.FC<AddToWishlistProps> = ({ isAdded }) => {
  return (
    <IconButton size="small">
      {isAdded ? <HeartIconFilled color="primary" /> : <HeartIconOutlined />}
    </IconButton>
  )
}
