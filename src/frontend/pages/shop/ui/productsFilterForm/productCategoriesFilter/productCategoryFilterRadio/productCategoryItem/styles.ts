import { createSxStyles } from '@frontend/shared/lib'

import { GetStylesProps } from './types'

export const getStyles = ({ isActive }: GetStylesProps) =>
  createSxStyles({
    formControlLabel: {
      m: 0,
    },
    formControlLabelTypography: {
      display: 'flex',
    },
    radio: {
      opacity: 0,
      position: 'absolute',
      zIndex: -1,
    },
    root: theme => ({
      '@media (hover: hover)': {
        '&:hover': {
          color: 'primary.main',
        },
      },
      textDecoration: isActive ? 'underline' : 'none',
      transition: theme.transitions.create('color'),
    }),
  })
