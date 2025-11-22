import Box from '@mui/material/Box'
import React from 'react'
import { useInView } from 'react-intersection-observer'

import { InfiniteScrollBlockProps } from './types'

export const InfiniteScrollBlock: React.FC<InfiniteScrollBlockProps> = ({
  children,
  hasAltCondition,
  hasData,
  onRichEnd,
}) => {
  const refetchInterval = React.useRef<NodeJS.Timer | null>(null)

  const { inView: inViewEndOfList, ref: endOfListRef } = useInView()

  React.useEffect(() => {
    if (refetchInterval.current) {
      clearInterval(refetchInterval.current)
    }

    const canFetchData =
      hasAltCondition === undefined
        ? inViewEndOfList
        : inViewEndOfList || hasAltCondition

    if (canFetchData && hasData) {
      refetchInterval.current = setInterval(() => {
        onRichEnd?.()
      }, 500)
    }

    return () => {
      if (refetchInterval.current) {
        clearInterval(refetchInterval.current)
      }
    }
  }, [inViewEndOfList, hasAltCondition])

  return (
    <>
      {children}
      {hasData && <Box ref={endOfListRef} />}
    </>
  )
}
