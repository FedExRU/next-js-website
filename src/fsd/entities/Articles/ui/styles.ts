import { createSxStyles } from '@fsd/shared'

export const getStyles = () =>
  createSxStyles({
    articleImageWrapper: {
      position: 'relative',
      height: 325,
    },
    articleImageSkeleton: {
      height: '100%',
    },
    articleTitleSkeleton: {
      height: 32,
      width: 267,
    },
  })
