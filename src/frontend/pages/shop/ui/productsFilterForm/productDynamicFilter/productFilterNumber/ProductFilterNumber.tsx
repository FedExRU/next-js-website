'use client'

import { NumberRangeField } from '@frontend/shared/ui'
import React from 'react'

import { ProductFilterNumberProps } from './types'

export const ProductFilterNumber: React.FC<ProductFilterNumberProps> = ({
  label,
  name,
  onChange,
  value,
}) => {
  return (
    <NumberRangeField
      inputEndProps={{
        name: name?.[1],
        onChange,
        value: value?.[1] ?? '',
      }}
      inputStartProps={{
        name: name?.[0],
        onChange,
        value: value?.[0] ?? '',
      }}
      label={label}
    />
  )
}
