import { createSxStyles } from '@fsd/shared/lib'

export const getStyles = () =>
  createSxStyles({
    actionLink: theme => ({
      '&::after': {
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: 'inherit',
        bottom: 0,
        content: '""',
        height: 1,
        left: 0,
        opacity: 1,
        position: 'absolute',
        transition: theme.transitions.create('opacity'),
        width: '100%',
      },
      '@media(hover: hover)': {
        '&:hover': {
          '&::after': {
            opacity: 0,
          },
        },
      },
      alignItems: 'center',
      display: 'inline-flex',
      position: 'relative',
      textDecoration: 'none',
    }),
    icon: { '& path': { strokeWidth: 1.25 }, pl: 0.5 },
  })
