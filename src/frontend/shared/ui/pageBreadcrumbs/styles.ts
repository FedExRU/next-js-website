import { createSxStyles } from '../../lib'

export const getStyles = () =>
  createSxStyles({
    link: theme => ({
      '@media (hover: hover)': {
        '&:hover': {
          color: 'text.primary',
        },
      },
      color: 'text.secondary',
      textDecoration: 'none',
      transition: theme.transitions.create('color'),
    }),
    root: theme => ({
      [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
        gap: 2,
        maxHeight: 308,
      },
      [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
        gap: 3,
        maxHeight: 392,
      },
      alignItems: 'center',
      backgroundColor: 'grey.300',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
      width: '100%',
    }),
  })
