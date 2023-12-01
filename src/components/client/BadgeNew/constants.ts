import { BoxProps } from '@mui/material/Box'
import { BadgeNewSize } from './types'

export const BadgeNewSxProps: Record<BadgeNewSize, BoxProps['sx']> = {
  medium: theme => ({
    minWidth: 67,
    height: 24,
    padding: theme.spacing(0.5, 1.75, 0.5, 1.75),
    ...theme.typography.hairline2Bold,
    display: 'inline-flex',
  }),
  large: {},
}
