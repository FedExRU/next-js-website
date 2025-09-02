import { createSxStyles } from '@fsd/shared/lib'

export const getStyles = () =>
  createSxStyles({
    menuContainer: {
      alignItems: 'center',
      display: { md: 'flex', xs: 'none' },
      width: '100%',
    },

    menuListItem: theme => ({
      listStyle: 'none',
      padding: theme.spacing(0, 2.5),
    }),
  })
