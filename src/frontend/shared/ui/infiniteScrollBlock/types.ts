export type InfiniteScrollBlockProps =
  React.PropsWithChildren<InfiniteScrollBlockBaseProps>

type InfiniteScrollBlockBaseProps = {
  hasAltCondition?: boolean
  hasData?: boolean
  onRichEnd?: () => void
}
