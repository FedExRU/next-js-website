import {
  ButtonOwnProps as MuiButtonOwnProps,
  ButtonPropsSizeOverrides as MuiButtonPropsSizeOverrides,
} from '@mui/material'

declare module '@mui/material/Button' {
  interface ButtonOwnProps extends MuiButtonOwnProps {
    rounded?: 'large' | 'medium' | 'small'
  }
  interface ButtonPropsSizeOverrides extends MuiButtonPropsSizeOverrides {
    xLarge: true
    xSmall: true
  }
}
