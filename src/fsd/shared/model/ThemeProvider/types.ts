import { DeviceType } from '@fsd/shared'
import { PropsWithChildren } from 'react'

export type ThemeProviderProps = PropsWithChildren & {
  deviceType: DeviceType
}
