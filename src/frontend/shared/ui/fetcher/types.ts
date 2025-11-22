export type FetcherProps = {
  height?: React.CSSProperties['height']
  isLoading?: boolean
  isVisible?: boolean
  loadingText?: string
  onClick?: (event: React.MouseEvent) => void
  text?: string
}

export type GetStylesProps = Pick<FetcherProps, 'height' | 'isLoading'>
