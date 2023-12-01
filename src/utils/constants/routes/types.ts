export type RouteItemType = 'Literal' | 'Dynamic'

export type RouteItem =
  | {
      path: string
      children?: RouteItem[]
      type: RouteItemType
    }
  | {
      type: 'Literal'
      label: string
    }
  | {
      type: 'Dynamic'
    }
