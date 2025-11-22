import { DIRECTION_ORDER } from '@common/constants'

import { SortItem } from './productsList'

export const ORDER_BY_MAP = {
  'id-desc': {
    label: 'New Arrivals First',
    value: {
      direction: DIRECTION_ORDER.DESC,
      field: 'id',
    },
  },
  'price-asc': {
    label: 'Low Price First',
    value: {
      direction: DIRECTION_ORDER.ASC,
      field: 'price',
    },
  },
  'price-desc': {
    label: 'High Price First',
    value: {
      direction: DIRECTION_ORDER.DESC,
      field: 'price',
    },
  },
} as const

export const SORT_ITEMS = Object.keys(ORDER_BY_MAP).reduce(
  (accumulator, key) => {
    return [
      ...accumulator,
      {
        label: ORDER_BY_MAP[key as keyof typeof ORDER_BY_MAP].label,
        value: key,
      },
    ]
  },
  [] as SortItem[],
)
