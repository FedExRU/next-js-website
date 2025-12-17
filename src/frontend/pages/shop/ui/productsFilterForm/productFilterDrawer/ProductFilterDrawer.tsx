import { Drawer, FilterIcon } from '@frontend/shared/ui'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import React from 'react'

import { useFormContext } from '../../contexts'
import { TOOLTIP_DELAY } from './constants'
import { getStyles } from './styles'
import { ProductFilterDrawerProps } from './types'

export const ProductFilterDrawer: React.FC<ProductFilterDrawerProps> = ({
  children,
  count,
}) => {
  const [open, setOpen] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)
  const { handleSubmit, resetForm } = useFormContext()

  const { styles } = getStyles({ isFocused })

  const toggleDrawer = () => {
    setOpen(prev => !prev)
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const handleReset = () => {
    resetForm()
    handleSubmit()
  }

  return (
    <>
      <Tooltip
        arrow
        describeChild
        enterDelay={TOOLTIP_DELAY}
        leaveDelay={TOOLTIP_DELAY}
        slotProps={{
          popper: {
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, -16],
                },
              },
            ],
          },
        }}
        title="Open Filter Menu"
      >
        <Badge badgeContent={count} color="primary">
          <IconButton
            onBlur={handleBlur}
            onClick={toggleDrawer}
            onFocus={handleFocus}
            sx={styles.filterButton}
          >
            <FilterIcon />
          </IconButton>
        </Badge>
      </Tooltip>
      <Drawer
        actionPrimary={{
          children: 'Apply Filters',
          onClick: toggleDrawer,
        }}
        actionSecondary={{
          children: 'Reset Filters',
          onClick: handleReset,
        }}
        onClose={toggleDrawer}
        open={open}
        title="Filters"
        titleIcon={<FilterIcon />}
      >
        {children}
      </Drawer>
    </>
  )
}
