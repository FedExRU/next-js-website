import { createSxStyles } from '@fsd/shared'

export const getStyles = () =>
  createSxStyles({
    articleImageSkeleton: {
      height: '100%',
    },
    articleImageWrapper: {
      height: 325,
      position: 'relative',
    },
    articleTitleSkeleton: {
      height: 32,
      width: 267,
    },
  })
