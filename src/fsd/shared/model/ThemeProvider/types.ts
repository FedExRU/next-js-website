import { PropsWithChildren } from 'react'
import { DeviceType } from '@fsd/shared'

export type ThemeProviderProps = PropsWithChildren & {
  deviceType: DeviceType
}
