import { createSxStyles } from '@frontend/shared/lib'

export const getStyles = () =>
  createSxStyles({
    paper: {
      boxShadow:
        '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    },
    select: {
      '&::after': {
        display: 'none',
      },
      '&::before': {
        display: 'none',
      },
      '@media (hover: hover)': {
        '&:hover .MuiSvgIcon-root': {
          color: 'text.primary',
        },
      },
    },
  })
