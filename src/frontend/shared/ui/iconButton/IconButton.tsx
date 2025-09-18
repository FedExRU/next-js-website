'use client'

import {
  ExtendButtonBase,
  IconButtonTypeMap,
  IconButton as MuiIconButton,
  useTheme,
} from '@mui/material'

import { IconButtonProps } from './types'

const _IconButton: React.FC<React.PropsWithChildren<IconButtonProps>> = ({
  noElevation,
  sx: sxProp,
  ...rest
}) => {
  const theme = useTheme()

  const sx = typeof sxProp === 'function' ? sxProp(theme) : sxProp

  return (
    <MuiIconButton
      {...rest}
      sx={{
        ...sx,
        boxShadow: noElevation
          ? 'none'
          : (sx as React.CSSProperties)?.boxShadow,
      }}
    />
  )
}

export const IconButton = _IconButton as ExtendButtonBase<
  IconButtonTypeMap<IconButtonProps>
>
