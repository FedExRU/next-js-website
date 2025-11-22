'use client'

import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import MuiLink from '@mui/material/Link'
import Link from 'next/link'

import { Typography } from '../typography'
import { getStyles } from './styles'
import { PageBreadcrumbsProps } from './types'

const { styles } = getStyles()

export const PageBreadcrumbs: React.FC<PageBreadcrumbsProps> = ({
  breadcrumbs,
  description,
  image,
  name,
}) => {
  const lastBreadcrumb = breadcrumbs?.[breadcrumbs.length - 1]
  const breadcrumbsWithoutLast = breadcrumbs?.slice(0, -1) ?? []

  return (
    <Box
      style={image ? { backgroundImage: `url(${image})` } : {}}
      sx={styles.root}
    >
      {breadcrumbs?.length ? (
        <Breadcrumbs aria-label="Breadcrumbs">
          {breadcrumbsWithoutLast.map(({ name = '', path = '' }) => (
            <MuiLink
              component={Link}
              href={path}
              key={path + name}
              sx={styles.link}
              variant="button"
            >
              {name}
            </MuiLink>
          ))}
          {lastBreadcrumb?.name && (
            <Typography variant="button">{lastBreadcrumb.name}</Typography>
          )}
        </Breadcrumbs>
      ) : null}
      {name && (
        <Typography component="h1" variant={{ md: 'h3', xs: 'h4' }}>
          {name}
        </Typography>
      )}
      {description && (
        <Typography variant={{ md: 'body1', xs: 'body2' }}>
          {description}
        </Typography>
      )}
    </Box>
  )
}
