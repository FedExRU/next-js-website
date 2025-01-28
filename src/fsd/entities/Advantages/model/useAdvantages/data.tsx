import { CallIcon, LockIcon, PaymentIcon, ShippingIcon } from '@fsd/shared'

import { ADVANTAGES_KIND } from './constants'
import { AdvantagesDataMap } from './types'

export const data: AdvantagesDataMap = {
  [ADVANTAGES_KIND.FREE_SHIPPING]: {
    description: 'Order above $200',
    icon: <ShippingIcon />,
    title: 'Free shipping',
  },
  [ADVANTAGES_KIND.FULL_SUPPORT]: {
    description: 'Phone and email support',
    icon: <CallIcon />,
    title: '24/7 support',
  },
  [ADVANTAGES_KIND.MONEY_BACK]: {
    description: '30 days guarantee',
    icon: <PaymentIcon />,
    title: 'Money-back',
  },
  [ADVANTAGES_KIND.SECURE_PAYMENTS]: {
    description: 'Secured by Stripe',
    icon: <LockIcon />,
    title: 'Secure payments',
  },
} as const
