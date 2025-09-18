import { BoxProps } from '@mui/material'
import { ImageProps } from 'next/image'

export type GetSliderItemImagePropsReturnProps = Partial<ImageProps> &
  Pick<BoxProps, 'sx'>
