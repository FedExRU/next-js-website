'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const NotificationsPortal = dynamic(
  () =>
    import('./NotificationsPortal').then(module => module.NotificationsPortal),
  { ssr: false },
)

export const NotificationsPortalLazy: React.FC = () => <NotificationsPortal />
