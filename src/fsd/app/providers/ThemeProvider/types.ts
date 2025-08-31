import { DeviceType } from '@fsd/shared/lib'

export type ThemeProviderProps = React.PropsWithChildren & {
  deviceType: DeviceType
}
