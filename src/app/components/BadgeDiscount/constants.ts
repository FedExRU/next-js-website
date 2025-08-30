import { BoxProps } from '@mui/material/Box'

import { BadgeDiscountSize } from './types'

export const BadgeDiscountSxProps: Record<BadgeDiscountSize, BoxProps['sx']> = {
  large: theme => ({
    height: 34,
    minWidth: 84,
    padding: theme.spacing(1, 2.25, 1, 2.25),
    ...theme.typography.hairline1Bold,
  }),
  medium: theme => ({
    height: 24,
    minWidth: 43,
    padding: theme.spacing(0.5, 1.75, 0.5, 1.75),
    ...theme.typography.hairline2Bold,
  }),
}
