import { createSxStyles } from '@fsd/shared/lib'

export const getStyles = () =>
  createSxStyles({
    menuButton: {
      border: 'none',
      height: 24,
      minWidth: 0,
      p: 1,
      width: 24,
    },
    menuContainer: {
      alignItems: 'center',
      display: 'flex',
      width: '100%',
    },
    menuDrawer: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      p: 3,
    },
    menuDrawerContent: {
      '&:last-child': {
        p: 0,
      },
      p: 0,
    },
    menuDrawerFooter: {
      mt: 'auto',
      p: 0,
    },
    menuDrawerFooterGrid: {
      width: '100%',
    },
    menuDrawerHeader: {
      p: 0,
      pb: 2,
    },
    menuDrawerHeaderContent: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
    },
    menuDrawerPaper: {
      width: '90%',
    },
    menuWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
    menuWrapperPart: {
      alignItems: 'center',
      display: 'flex',
    },
    menuWrapperPartLogo: {
      alignItems: 'center',
      display: 'flex',
      gap: 1,
    },
  })
