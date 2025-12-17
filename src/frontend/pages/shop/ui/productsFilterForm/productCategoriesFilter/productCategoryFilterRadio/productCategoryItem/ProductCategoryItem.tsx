import { Typography } from '@frontend/shared/ui'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import Link from 'next/link'
import React from 'react'

import { getStyles } from './styles'
import { ProductCategoryItemProps } from './types'

export const ProductCategoryItem: React.FC<ProductCategoryItemProps> = ({
  isActive,
  label,
  name,
  onClick,
  value,
}) => {
  const { styles } = getStyles({ isActive })
  const radioRef = React.useRef<HTMLInputElement | null>(null)

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault()
    radioRef.current?.click()
    queueMicrotask(() => radioRef.current?.focus())
  }

  return (
    <FormControlLabel
      control={
        <Radio slotProps={{ input: { ref: radioRef } }} sx={styles.radio} />
      }
      label={
        <Typography
          color={isActive ? 'textPrimary' : 'textSecondary'}
          component={Link}
          // @ts-expect-error href property missmatch
          href={value === 0 ? `/shop` : `/shop?categoryId="${value}"`}
          onClick={handleClick}
          sx={styles.root}
          tabIndex={-1}
          variant="body2Semi"
        >
          {label}
        </Typography>
      }
      name={name}
      onClick={onClick}
      slotProps={{
        typography: {
          sx: styles.formControlLabelTypography,
        },
      }}
      sx={styles.formControlLabel}
      value={value}
    />
  )
}
