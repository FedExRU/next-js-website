'use client'

import { useEffect, useState } from 'react'

import { UseImageLoadedStatus } from './constants'
import { UseImageLoadedProps, UseImageLoadedStatusType } from './types'

export const useImageLoaded = ({
  crossOrigin,
  onError,
  referrerPolicy,
  src,
  srcSet,
}: UseImageLoadedProps): UseImageLoadedStatusType => {
  const [imageStatus, setImageStatus] = useState<UseImageLoadedStatusType>(
    UseImageLoadedStatus.pending,
  )

  useEffect(() => {
    if (onError) {
      setImageStatus(UseImageLoadedStatus.skipped)

      return
    }

    if (!src && !srcSet) {
      return
    }

    setImageStatus(UseImageLoadedStatus.pending)

    let active = true

    const image = new Image()

    image.onload = () => {
      if (!active) {
        return
      }
      setImageStatus(UseImageLoadedStatus.ready)
    }
    image.onerror = () => {
      if (!active) {
        return
      }
      setImageStatus(UseImageLoadedStatus.error)
    }
    if (crossOrigin) {
      image.crossOrigin = crossOrigin
    }
    if (referrerPolicy) {
      image.referrerPolicy = referrerPolicy
    }
    if (srcSet) {
      image.srcset = srcSet
    }
    if (src) {
      image.src = src
    }

    return () => {
      active = false
    }
  }, [crossOrigin, referrerPolicy, src, srcSet, onError])

  return imageStatus
}
