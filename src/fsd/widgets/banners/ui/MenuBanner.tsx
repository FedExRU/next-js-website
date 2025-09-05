'use client'

import { useGetBannerByPlacement } from '@fsd/entities/banners'
import { useAdaptive } from '@fsd/shared/lib'
import { ActionLink, CloseIcon, IconButton, Typography } from '@fsd/shared/ui'
import { Alert, Box, Collapse } from '@mui/material'
import DOMPurify from 'dompurify'
import Link from 'next/link'
import React from 'react'

import { ARIA_LABEL } from './constants'
import { getStyles } from './styles'

const { styles } = getStyles()

const MenuBannerComponent: React.FC = () => {
  const { data, isLoading } = useGetBannerByPlacement({ placement: 'menu' })
  const [isOpen, setIsOpen] = React.useState(true)
  const { isMobile } = useAdaptive()

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsOpen(false)
  }

  const banner = data?.items[0]

  const showActionLink = banner?.linkText && banner?.href && !isMobile

  const iconToRender =
    banner?.imageType === 'svg' && banner.image
      ? DOMPurify.sanitize(JSON.parse(banner.image))
      : false

  return (
    <Collapse in={!isLoading && isOpen}>
      <Alert
        action={
          <IconButton
            aria-label={ARIA_LABEL}
            onClick={handleClose}
            size="small"
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
        component={isMobile && banner?.href ? Link : 'div'}
        icon={false}
        {...(isMobile && banner?.href && { href: banner?.href })}
        sx={styles.banner}
      >
        <Typography sx={styles.text} variant="caption1">
          {iconToRender && (
            <Box
              component="span"
              dangerouslySetInnerHTML={{ __html: iconToRender }}
              sx={styles.iconWrapper}
            />
          )}
          {banner?.text}
          {showActionLink && (
            <ActionLink text={banner.linkText} to={banner.href!} />
          )}
        </Typography>
      </Alert>
    </Collapse>
  )
}

export const MenuBanner = () => {
  return (
    <React.Suspense fallback={'loading'}>
      <MenuBannerComponent />
    </React.Suspense>
  )
}
