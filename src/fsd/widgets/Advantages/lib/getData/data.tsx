import { ADVANTAGES_KIND } from './constants'
import { AdvantagesDataMap } from './types'
import { CallIcon, LockIcon, PaymentIcon, ShippingIcon } from '@fsd/shared'

export const data: AdvantagesDataMap = {
  [ADVANTAGES_KIND.FREE_SHIPPING]: {
    title: 'Free shipping',
    description: 'Order above $200',
    icon: <ShippingIcon />,
  },
  [ADVANTAGES_KIND.MONEY_BACK]: {
    title: 'Money-back',
    description: '30 days guarantee',
    icon: <PaymentIcon />,
  },
  [ADVANTAGES_KIND.SECURE_PAYMENTS]: {
    title: 'Secure payments',
    description: 'Secured by Stripe',
    icon: <LockIcon />,
  },
  [ADVANTAGES_KIND.FULL_SUPPORT]: {
    title: '24/7 support',
    description: 'Phone and email support',
    icon: <CallIcon />,
  },
} as const
