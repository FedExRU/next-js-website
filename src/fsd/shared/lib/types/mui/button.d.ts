import {
  ButtonPropsSizeOverrides as MuiButtonPropsSizeOverrides,
  ButtonOwnProps as MuiButtonOwnProps,
} from '@mui/material'

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides extends MuiButtonPropsSizeOverrides {
    xSmall: true
    xLarge: true
  }
  interface ButtonOwnProps extends MuiButtonOwnProps {
    rounded?: 'small' | 'medium' | 'large'
  }
}
