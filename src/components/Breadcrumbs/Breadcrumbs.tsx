'use client'

import { default as MuiBreadcrumbs } from '@mui/material/Breadcrumbs'
import { default as MuiLink } from '@mui/material/Link'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Typography from '@mui/material/Typography'
import { BreadcrumbsProps } from './types'

export const localItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Shop',
    href: '/components',
  },
]

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const pathname = usePathname()

  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      {(items || localItems).map(({ href, label }) =>
        href === pathname ? (
          <Typography variant="button" key={href}>
            {label}
          </Typography>
        ) : (
          <MuiLink
            key={href}
            component={Link}
            underline="hover"
            href="/"
            color="primary.light"
            sx={{
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            {label}
          </MuiLink>
        ),
      )}
    </MuiBreadcrumbs>
  )
}
