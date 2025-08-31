import { Breakpoint, Theme } from '@mui/material'

import { GetSxArgs } from './types'

export const makeGetSx =
  ({ sx, variant = {} }: GetSxArgs) =>
  (theme: Theme) => {
    const sxData = typeof sx === 'function' ? sx(theme) : sx || {}
    const breakpoints = Object.keys(variant) as Breakpoint[]

    return breakpoints.reduce(
      (accum, breakpoint) => {
        const variantValue = variant[breakpoint]

        if (!variantValue || !(variantValue in theme.typography)) {
          return accum
        }

        const typographyData = theme.typography?.[variantValue]

        if (typeof typographyData !== 'object') {
          return accum
        }

        return {
          ...accum,
          [theme.breakpoints.up(breakpoint)]: {
            //@ts-expect-error button properties missmatch
            ...sxData?.[theme.breakpoints.up(breakpoint)],
            color: undefined,
            ...typographyData,
          },
        }
      },
      { ...sxData },
    )
  }
