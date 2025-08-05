import { createSxStyles } from '@fsd/shared'

export const getStyles = () =>
  createSxStyles({
    sliderWrapper: {
      backgroundColor: 'grey.200',
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
    },
    wrapper: { position: 'relative' },
  })
