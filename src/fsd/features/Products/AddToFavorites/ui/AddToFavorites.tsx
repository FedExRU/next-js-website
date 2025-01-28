import { HeartIconFilled, HeartIconOutlined } from '@fsd/shared'
import { IconButton } from '@mui/material'
import { FC } from 'react'

import { AddToFavoritesProps } from './types'

export const AddToFavorites: FC<AddToFavoritesProps> = ({ isAdded }) => {
  return (
    <IconButton size="small">
      {isAdded ? <HeartIconFilled color="primary" /> : <HeartIconOutlined />}
    </IconButton>
  )
}
