import { Breakpoint, Theme } from '@mui/material'

import { GetSxArgs } from './types'

export const makeGetSx =
  ({ size = {}, sx }: GetSxArgs) =>
  (theme: Theme) => {
    const sxData = typeof sx === 'function' ? sx(theme) : sx || {}
    const breakpoints = Object.keys(size) as Breakpoint[]

    return breakpoints.reduce(
      (accum, breakpoint) => {
        const sizeValue = size[breakpoint]

        if (!sizeValue) {
          return accum
        }

        const buttonData =
          theme.components?.MuiButton?.variants
            //@ts-expect-error button props property missmatch
            ?.find(({ props }) => props?.size === sizeValue)
            //@ts-expect-error style property missmatch
            ?.style?.({ theme }) || {}

        if (typeof buttonData !== 'object') {
          return accum
        }

        return {
          ...accum,
          [theme.breakpoints.up(breakpoint)]: {
            //@ts-expect-error button properties missmatch
            ...sxData?.[theme.breakpoints.up(breakpoint)],
            ...buttonData,
          },
        }
      },
      { ...sxData },
    )
  }
