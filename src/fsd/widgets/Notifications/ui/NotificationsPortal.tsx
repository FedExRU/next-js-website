'use client'

import * as React from 'react'
import { createPortal } from 'react-dom'

import { Notifications } from './Notifications'

export const NotificationsPortal: React.FC = () =>
  createPortal(<Notifications />, document.body)
