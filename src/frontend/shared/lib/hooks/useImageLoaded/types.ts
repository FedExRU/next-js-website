import React from 'react'

import { UseImageLoadedStatus } from './constants'

export type UseImageLoadedProps = React.JSX.IntrinsicElements['img']

export type UseImageLoadedStatusType = keyof typeof UseImageLoadedStatus
