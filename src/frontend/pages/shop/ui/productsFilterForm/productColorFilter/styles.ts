import { createSxStyles } from '@frontend/shared/lib'

export const getStyles = () =>
  createSxStyles({
    colorBlock: {
      alignItems: 'center',
      display: 'flex',
      gap: 1,
    },

    fieldSet: {
      border: 'none',
      m: 0,
      p: 0,
    },
    formControlLabel: theme => ({
      '& .MuiTypography-root': {
        transition: theme.transitions.create('color'),
      },
      '&:focus-visible .MuiCheckbox-root': {
        color: 'currentColor',
      },
      '@media (hover: hover)': {
        '&:hover .MuiTypography-root': {
          color: 'text.primary',
        },
      },
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      m: 0,

      width: '100%',
    }),
    formGroup: {
      display: 'flex',
      flexDirection: 'row',
      gap: 1,
      maxHeight: 300,
      overflowY: 'auto',
      p: 0.25,
      width: '100%',
    },
    inputLabel: {
      m: 0,
      mb: 1,
    },
  })
