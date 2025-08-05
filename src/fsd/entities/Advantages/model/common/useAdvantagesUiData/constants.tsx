import { CallIcon, LockIcon, PaymentIcon, ShippingIcon } from '@fsd/shared'

export const ADVANTAGES_ICONS_MAP = {
  freeShipping: <ShippingIcon />,
  fullSupport: <CallIcon />,
  moneyBack: <PaymentIcon />,
  securePayments: <LockIcon />,
} as const
