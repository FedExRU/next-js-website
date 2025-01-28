'use client'

import { default as MuiBreadcrumbs } from '@mui/material/Breadcrumbs'
import { default as MuiLink } from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { BreadcrumbsProps } from './types'

export const localItems = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/components',
    label: 'Shop',
  },
]

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const pathname = usePathname()

  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      {(items || localItems).map(({ href, label }) =>
        href === pathname ? (
          <Typography key={href} variant="button">
            {label}
          </Typography>
        ) : (
          <MuiLink
            color="primary.light"
            component={Link}
            href="/"
            key={href}
            sx={{
              '&:hover': {
                color: 'primary.main',
              },
            }}
            underline="hover"
          >
            {label}
          </MuiLink>
        ),
      )}
    </MuiBreadcrumbs>
  )
}
