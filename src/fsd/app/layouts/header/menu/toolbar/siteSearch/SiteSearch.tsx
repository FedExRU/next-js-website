'use client'

import { SearchIcon } from '@fsd/shared/ui'
import {
  Box,
  Collapse,
  IconButton,
  TextField,
  Theme,
  Tooltip,
} from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

import { initialValues, TOOLTIP_TEXT } from './constants'
import { SearchForm } from './types'

export const SiteSearch: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [tooltipText, setTooltipText] = React.useState(TOOLTIP_TEXT)

  const handleSubmitFormik = ({ term }: SearchForm) => {
    alert(term)
  }

  const inputRef = React.useRef<HTMLInputElement>(undefined)

  const {
    handleChange,
    handleSubmit,
    resetForm,
    values: { term },
  } = useFormik<SearchForm>({
    initialValues,
    onSubmit: handleSubmitFormik,
  })

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

  const handleCollapseExited = () => {
    resetForm()
    setTooltipText(TOOLTIP_TEXT)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Collapse
        collapsedSize={34}
        in={isOpen}
        onExited={handleCollapseExited}
        orientation="horizontal"
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ maxWidth: 300, width: 250 }}
        >
          <TextField
            fullWidth
            inputRef={inputRef}
            name="term"
            onChange={handleChange}
            placeholder="What would you like to find?"
            size="small"
            slotProps={{
              input: {
                inputProps: {
                  'aria-label': 'Website search field',
                  sx: (theme: Theme) => ({
                    ...theme.typography.caption1,
                  }),
                },
                startAdornment: (
                  <Tooltip arrow title={tooltipText}>
                    <IconButton
                      color="primary"
                      onClick={handleToggleSearchForm}
                      size="small"
                      sx={{ boxShadow: 'none' }}
                    >
                      <SearchIcon />
                    </IconButton>
                  </Tooltip>
                ),
                sx: {
                  '&::before': {
                    opacity: isOpen ? '1' : '0',
                  },
                },
              },
            }}
            value={term}
            variant="standard"
          />
        </Box>
      </Collapse>
    </Box>
  )
}
