/* eslint-disable @typescript-eslint/no-unused-vars */

import { Skeleton } from '@fsd/shared/ui'
import { Box } from '@mui/material'
import DOMPurify from 'dompurify'
import Link from 'next/link'

import { getSocialNetworkStyles as getStyles } from './styles'
import { SocialNetworkItemProps } from './types'

export const SocialNetworkItem: React.FC<SocialNetworkItemProps> = ({
  icon = '',
  id,
  kind,
  name,
  skeleton,
  skeletonColor = 'primary',
  url = '',
  ...rest
}) => {
  const { styles } = getStyles({ skeletonColor })
  if (skeleton) {
    return <Skeleton height={24} sx={styles.skeleton} width={24} />
  }

  return (
    <Box
      aria-label={name}
      component={Link}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.parse(icon)) }}
      href={url}
      sx={styles.link}
      {...rest}
    />
  )
}
