import { createSxStyles } from '@fsd/shared'

export const getStyles = (isLoadingFailed: boolean) =>
  createSxStyles({
    mainSliderItem: {
      height: '100%',
      width: '100%',
      position: 'relative',
      maxHeight: 536,
    },
    mainSliderItemWrapper: {
      display: 'flex',
      height: '100%',
      opacity: isLoadingFailed ? 0.1 : 1,
      position: 'relative',
    },
  })
