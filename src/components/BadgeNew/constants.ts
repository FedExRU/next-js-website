import { BoxProps } from '@mui/material/Box'

import { BadgeNewSize } from './types'

export const BadgeNewSxProps: Record<BadgeNewSize, BoxProps['sx']> = {
  large: theme => ({
    height: 34,
    minWidth: 79,
    padding: theme.spacing(1, 2.25, 1, 2.25),
    ...theme.typography.hairline1Bold,
  }),
  medium: theme => ({
    height: 24,
    minWidth: 67,
    padding: theme.spacing(0.5, 1.75, 0.5, 1.75),
    ...theme.typography.hairline2Bold,
  }),
}
