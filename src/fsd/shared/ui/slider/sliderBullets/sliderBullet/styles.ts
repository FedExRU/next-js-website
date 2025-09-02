import { createSxStyles } from '@fsd/shared/lib'

import { GetStylesProps } from './types'

export const getStyles = ({ isActive }: GetStylesProps) =>
  createSxStyles({
    bullet: theme => ({
      alignItems: 'center',
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      height: 8,
      padding: 0,
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      }),
      width: isActive ? 30 : 8,
    }),
  })
