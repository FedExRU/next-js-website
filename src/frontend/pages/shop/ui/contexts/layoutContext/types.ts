export type LayoutContextProps = Required<LayoutContextProviderBaseProps> & {
  changeLayout: (layout: LayoutType) => void
}

export type LayoutContextProviderProps =
  React.PropsWithChildren<LayoutContextProviderBaseProps>

export type LayoutType =
  | 'grid-large'
  | 'grid-medium'
  | 'grid-small'
  | 'grid-x-large'

type LayoutContextProviderBaseProps = {
  layout?: LayoutType
}
