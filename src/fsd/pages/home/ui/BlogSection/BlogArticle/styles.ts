import { createSxStyles } from '@fsd/shared/lib'

export const getBlogArticleStyles = () =>
  createSxStyles({
    articleImage: {
      objectFit: 'cover',
    },
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
