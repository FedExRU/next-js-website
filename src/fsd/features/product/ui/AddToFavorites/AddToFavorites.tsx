import { HeartIconFilled, HeartIconOutlined } from '@fsd/shared/ui'
import { IconButton } from '@mui/material'

import { AddToFavoritesProps } from './types'

export const AddToFavorites: React.FC<AddToFavoritesProps> = ({ isAdded }) => {
  return (
    <IconButton size="small">
      {isAdded ? <HeartIconFilled color="primary" /> : <HeartIconOutlined />}
    </IconButton>
  )
}
