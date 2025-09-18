/* eslint-disable @typescript-eslint/no-unused-vars */

import { Box } from '@mui/material'
import DOMPurify from 'dompurify'
import Link from 'next/link'

import { LAYOUT } from '../../../../shared/lib'
import { Skeleton } from '../../../../shared/ui'
import { getSocialNetworkStyles as getStyles } from './styles'
import { SocialNetworkListItemProps } from './types'

export const SocialNetworkListItem: React.FC<SocialNetworkListItemProps> = ({
  icon = '',
  id,
  kind,
  layout = LAYOUT.PRIMARY,
  name,
  skeleton,
  url = '',
  ...rest
}) => {
  const { styles } = getStyles({ layout })
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
