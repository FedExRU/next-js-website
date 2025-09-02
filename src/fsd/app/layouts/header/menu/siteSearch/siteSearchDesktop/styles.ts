import { createSxStyles } from '@fsd/shared/lib'

import { GetSiteSearchDesktopStylesProps } from './types'

export const getStyles = ({ isOpen }: GetSiteSearchDesktopStylesProps) =>
  createSxStyles({
    form: { maxWidth: 300, width: 250 },
    input: theme => ({
      ...theme.typography.caption1,
      height: 40,
    }),
    inputCommon: {
      '&::before': {
        opacity: isOpen ? '1' : '0',
      },
    },
    root: { display: 'flex' },
    searchButton: { height: 40, width: 40 },
  })
