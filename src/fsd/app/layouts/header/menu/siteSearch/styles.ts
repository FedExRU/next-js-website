import { createSxStyles } from '@fsd/shared/lib'

import { GetSiteSearchStylesProps } from './types'

export const getStyles = ({ isOpen }: GetSiteSearchStylesProps) =>
  createSxStyles({
    form: { maxWidth: 300, width: 250 },
    input: theme => ({
      ...theme.typography.caption1,
    }),
    inputCommon: {
      '&::before': {
        opacity: isOpen ? '1' : '0',
      },
    },
    root: { display: 'flex' },
    searchButton: { height: 40, width: 40 },
  })
