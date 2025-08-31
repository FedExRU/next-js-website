import { createSxStyles } from '@fsd/shared/lib'

export const getStyles = () =>
  createSxStyles({
    menu: {
      display: 'inline-flex',
      m: {
        md: 'initial',
        xs: 'auto',
      },
    },
    menuList: {
      display: 'inline-flex',
      flexDirection: {
        md: 'row',
        xs: 'column',
      },
      mb: {
        md: 0,
        xs: -2,
      },
      ml: -2.5,
      mr: -2.5,
      mt: {
        md: 0,
        xs: -2,
      },
      p: 0,
    },
    menuListItem: {
      listStyle: 'none',
      pb: {
        md: 0,
        xs: 2,
      },
      pl: 2.5,
      pr: 2.5,
      pt: {
        md: 0,
        xs: 2,
      },
    },
    menuListItemLink: theme => ({
      '@media (hover: hover)': {
        '&:hover': {
          color: 'grey.300',
        },
      },
      color: 'grey.100',
      display: 'flex',
      fontWeight: 'medium',
      justifyContent: {
        md: 'flex-start',
        xs: 'center',
      },
      textDecoration: 'none',
      textTransform: 'capitalize',
      transition: theme.transitions.create('color'),
    }),
  })
