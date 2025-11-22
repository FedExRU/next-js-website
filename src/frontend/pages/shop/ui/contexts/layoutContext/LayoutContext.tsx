import { useAdaptive } from '@frontend/shared/lib'
import React from 'react'

import {
  LayoutContextProps,
  LayoutContextProviderProps,
  LayoutType,
} from './types'

export const LayoutContext: React.Context<LayoutContextProps> =
  React.createContext({
    changeLayout: (() => {}) as unknown as LayoutContextProps['changeLayout'],
    layout: 'grid-small' as LayoutType,
  })

export const LayoutContextProvider: React.FC<LayoutContextProviderProps> = ({
  children,
  layout: typeProps = 'grid-small',
}) => {
  const [layout, setLayout] = React.useState<LayoutType>(typeProps)
  const lastDesktopLayoutRef = React.useRef<LayoutType | null>(null)
  const { isMobile, isTablet } = useAdaptive()

  const isMobileView = isMobile || isTablet

  const changeLayout = (newLayout: LayoutType) => {
    lastDesktopLayoutRef.current = null
    setLayout(newLayout)
  }

  React.useEffect(() => {
    if (isMobileView) {
      if (layout === 'grid-small') {
        setLayout(prev => {
          lastDesktopLayoutRef.current = prev
          return 'grid-large'
        })
      } else if (layout === 'grid-medium') {
        setLayout(prev => {
          lastDesktopLayoutRef.current = prev
          return 'grid-x-large'
        })
      }
    } else {
      if (lastDesktopLayoutRef.current) {
        setLayout(lastDesktopLayoutRef.current)
      }
    }
  }, [isMobileView])

  return (
    <LayoutContext value={{ changeLayout, layout }}>{children}</LayoutContext>
  )
}

export const useLayoutContext = (): LayoutContextProps => {
  const context = React.useContext(LayoutContext)

  if (!context) {
    throw new Error('Hook useLayoutContext must be used within LayoutContext!')
  }

  return context
}
