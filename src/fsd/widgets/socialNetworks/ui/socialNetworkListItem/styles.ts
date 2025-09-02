import { createSxStyles, LAYOUT } from '@fsd/shared/lib'

import { GetStylesProps } from './types'

export const getSocialNetworkStyles = ({ layout }: GetStylesProps) => {
  const isPrimaryLayout = layout === LAYOUT.PRIMARY

  return createSxStyles({
    link: theme => ({
      '@media (hover: hover)': {
        '&:hover': {
          color: isPrimaryLayout ? 'grey.500' : 'grey.300',
        },
      },

      color: isPrimaryLayout ? 'grey.700' : 'grey.100',
      display: 'inline-flex',
      transition: theme.transitions.create('color'),
    }),
    skeleton: {
      bgcolor: isPrimaryLayout ? undefined : 'grey.400',
    },
  })
}
