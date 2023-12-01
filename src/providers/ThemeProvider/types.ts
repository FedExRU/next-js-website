import { PropsWithChildren } from 'react'
import { DeviceType } from 'types'

export type ThemeProviderProps = PropsWithChildren & {
  deviceType: DeviceType
}
