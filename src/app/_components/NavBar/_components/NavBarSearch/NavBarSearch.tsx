'use client'

import { Theme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { FC, useRef, useState } from 'react'
import Collapse from '@mui/material/Collapse'
import { useFormik } from 'formik'
import Tooltip from '@mui/material/Tooltip'
import { TOOLTIP_TEXT, initialValues } from './constants'
import { SearchForm } from './types'
import { SearchIcon } from 'components/Icons'

export const NavBarSearch: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [tooltipText, setTooltipText] = useState(TOOLTIP_TEXT)

  const handleSubmitFormik = ({ term }: SearchForm) => {
    alert(term)
  }

  const inputRef = useRef<HTMLInputElement>(undefined)

  const {
    values: { term },
    handleSubmit,
    handleChange,
    resetForm,
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
        orientation="horizontal"
        in={isOpen}
        collapsedSize={34}
        onExited={handleCollapseExited}
      >
        <Box
          component="form"
          sx={{ maxWidth: 300, width: 250 }}
          onSubmit={handleSubmit}
        >
          <TextField
            variant="standard"
            name="term"
            fullWidth
            size="small"
            value={term}
            placeholder="What would you like to find?"
            onChange={handleChange}
            inputRef={inputRef}
            InputProps={{
              inputProps: {
                'aria-label': 'Website search field',
                sx: (theme: Theme) => ({
                  ...theme.typography.caption1,
                }),
              },
              sx: {
                '&::before': {
                  opacity: isOpen ? '1' : '0',
                },
              },
              startAdornment: (
                <Tooltip title={tooltipText} arrow>
                  <IconButton
                    color="primary"
                    size="small"
                    sx={{ boxShadow: 'none' }}
                    onClick={handleToggleSearchForm}
                  >
                    <SearchIcon />
                  </IconButton>
                </Tooltip>
              ),
            }}
          />
        </Box>
      </Collapse>
    </Box>
  )
}
