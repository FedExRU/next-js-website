import { createSxStyles } from '@fsd/shared/lib'

export const getStyles = () =>
  createSxStyles({
    copyright: {
      display: {
        md: 'inline-flex',
        xs: 'flex',
      },
      justifyContent: {
        md: 'flex-start',
        xs: 'center',
      },
    },
    copyrightList: {
      display: 'inline-flex',
      mb: 0,
      ml: -1.75,
      mr: -1.75,
      mt: 0,
      p: 0,
    },
    copyrightListItem: {
      listStyle: 'none',
      pl: 1.75,
      pr: 1.75,
    },
    copyrightListItemLink: theme => ({
      '@media (hover: hover)': {
        '&:hover': {
          color: 'grey.300',
        },
      },

      color: 'grey.100',
      display: 'flex',
      fontWeight: 'medium',
      textDecoration: 'none',
      textTransform: 'capitalize',
      transition: theme.transitions.create('color'),
    }),
    copyrightText: {
      display: {
        md: 'inline-flex',
        xs: 'flex',
      },
      justifyContent: {
        md: 'flex-start',
        xs: 'center',
      },
    },
  })
