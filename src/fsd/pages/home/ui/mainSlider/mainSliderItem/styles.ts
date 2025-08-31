import { createSxStyles } from '@fsd/shared/lib'

export const getMainSliderItemStyles = () =>
  createSxStyles({
    mainSliderItem: {
      height: '100%',
      maxHeight: 536,
      position: 'relative',
      width: '100%',
    },
    mainSliderItemWrapper: {
      display: 'flex',
      height: '100%',
      opacity: 1,
      position: 'relative',
    },
  })
