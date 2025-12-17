import {
  GridLargeIcon,
  GridMediumIcon,
  GridSmallIcon,
  GridXLargeIcon,
} from '@frontend/shared/ui'

import { LayoutItem } from './types'

export const TOOLTIP_DELAY = 500

export const LAYOUT_ITEMS: LayoutItem[] = [
  {
    icon: <GridSmallIcon />,
    isVisibleInMobileView: false,
    label: 'Small grid view',
    value: 'grid-small',
  },
  {
    icon: <GridMediumIcon />,
    isVisibleInMobileView: false,
    label: 'Medium grid view',
    value: 'grid-medium',
  },
  {
    icon: <GridLargeIcon />,
    label: 'Large grid view',
    value: 'grid-large',
  },
  {
    icon: <GridXLargeIcon />,
    label: 'Extra large grid view',
    value: 'grid-x-large',
  },
]
