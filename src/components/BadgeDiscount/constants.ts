import { BoxProps } from '@mui/material/Box'
import { BadgeDiscountSize } from './types'

export const BadgeDiscountSxProps: Record<BadgeDiscountSize, BoxProps['sx']> = {
  medium: theme => ({
    minWidth: 43,
    height: 24,
    padding: theme.spacing(0.5, 1.75, 0.5, 1.75),
    ...theme.typography.hairline2Bold,
  }),
  large: theme => ({
    minWidth: 84,
    height: 34,
    padding: theme.spacing(1, 2.25, 1, 2.25),
    ...theme.typography.hairline1Bold,
  }),
}
