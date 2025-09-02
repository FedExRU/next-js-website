'use client'

import { IconButton } from '@fsd/shared/ui'
import { Box, Collapse, TextField, Tooltip } from '@mui/material'
import React from 'react'

import { TOOLTIP_TEXT } from './constants'
import { getStyles } from './styles'
import { SiteSearchDesktopProps } from './types'

export const SiteSearchDesktop: React.FC<SiteSearchDesktopProps> = ({
  icon,
  name,
  onChange,
  onClose,
  onSubmit,
  placeholder,
  value,
  ...rest
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [tooltipText, setTooltipText] = React.useState(TOOLTIP_TEXT)

  const { styles } = getStyles({ isOpen })

  const inputRef = React.useRef<HTMLInputElement>(undefined)
  const handleToggleSearchForm = () => {
    setIsOpen(prev => {
      if (prev) {
        inputRef.current?.blur()
      } else {
        inputRef.current?.focus()
        setTooltipText('')
      }

      return !prev
    })
  }

  return (
    <Box sx={styles.root}>
      <Collapse
        collapsedSize={40}
        in={isOpen}
        onExited={onClose}
        orientation="horizontal"
      >
        <Box component="form" onSubmit={onSubmit} sx={styles.form}>
          <TextField
            fullWidth
            inputRef={inputRef}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            size="small"
            slotProps={{
              input: {
                inputProps: {
                  'aria-label': rest['aria-label'],
                  sx: styles.input,
                  tabIndex: isOpen ? 0 : -1,
                },
                startAdornment: (
                  <Tooltip arrow describeChild title={tooltipText}>
                    <IconButton
                      color="primary"
                      noElevation
                      onClick={handleToggleSearchForm}
                      size="small"
                      sx={styles.searchButton}
                    >
                      {icon}
                    </IconButton>
                  </Tooltip>
                ),
                sx: styles.inputCommon,
              },
            }}
            value={value}
            variant="standard"
          />
        </Box>
      </Collapse>
    </Box>
  )
}
