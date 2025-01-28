'use client'

import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import { Theme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import { SearchIcon } from 'components/Icons'
import { useFormik } from 'formik'
import { FC, useRef, useState } from 'react'

import { initialValues, TOOLTIP_TEXT } from './constants'
import { SearchForm } from './types'

export const NavBarSearch: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [tooltipText, setTooltipText] = useState(TOOLTIP_TEXT)

  const handleSubmitFormik = ({ term }: SearchForm) => {
    alert(term)
  }

  const inputRef = useRef<HTMLInputElement>(undefined)

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
            InputProps={{
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
            }}
            inputRef={inputRef}
            name="term"
            onChange={handleChange}
            placeholder="What would you like to find?"
            size="small"
            value={term}
            variant="standard"
          />
        </Box>
      </Collapse>
    </Box>
  )
}
