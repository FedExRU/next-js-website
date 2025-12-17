'use client'

import React from 'react'

export const useDebounce = <T extends unknown[]>(
  func: (...args: T) => void,
  timeout = 500,
) => {
  const handleChangeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const handleChange = (...args: T) => {
    if (handleChangeTimeoutRef.current) {
      clearTimeout(handleChangeTimeoutRef.current)
    }

    handleChangeTimeoutRef.current = setTimeout(() => {
      func(...args)
    }, timeout)
  }

  return handleChange
}
