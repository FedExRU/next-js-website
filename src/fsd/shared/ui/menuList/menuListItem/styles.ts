import { createSxStyles, VIEW } from '../../../lib'
import { GetMenuItemStylesProps } from './types'

export const getStyles = ({
  isActive,
  view = VIEW.DESKTOP,
}: GetMenuItemStylesProps) => {
  const isMobileView = view === VIEW.MOBILE

  return createSxStyles({
    menuItem: theme => ({
      alignItems: 'center',
      display: isMobileView ? 'flex' : 'inline-flex',
      listStyle: 'none',
      padding: theme.spacing(isMobileView ? 2 : 0, isMobileView ? 0 : 2.5),
      position: 'relative',
      ...(isMobileView && {
        '&::after': {
          borderBottom: `1px solid ${theme.palette.grey[300]}`,
          bottom: 0,
          content: '""',
          height: 1,
          position: 'absolute',
          width: '100%',
        },
      }),
    }),
    menuItemIcon: {
      ml: 'auto',
    },
    menuItemText: theme => ({
      '@media (hover: hover)': {
        '&:hover': {
          color: 'common.black',
        },
      },
      color: isActive ? 'text.primary' : 'text.secondary',
      display: 'flex',
      fontWeight: 'medium',

      textDecoration: 'none',
      textTransform: 'capitalize',
      transition: theme.transitions.create('color'),
    }),
  })
}
