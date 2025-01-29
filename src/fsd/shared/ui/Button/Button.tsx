'use client'

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material'
import { FC } from 'react'

import { getStyles } from './styles'
import { ButtonProps } from './types'

export const Button: FC<ButtonProps> = ({
  size: sizeProp,
  sx: sxProp,
  ...rest
}) => {
  let sx = sxProp
  let size: MuiButtonProps['size']

  if (typeof sizeProp === 'string') {
    size = sizeProp
  } else if (typeof sizeProp === 'object') {
    sx = getStyles({ size: sizeProp, sx }).styles.button
  }

  return <MuiButton {...rest} size={size} sx={sx} />
}
