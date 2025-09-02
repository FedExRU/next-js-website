'use client'

import { VIEW } from '@fsd/shared/lib'
import { SearchIcon } from '@fsd/shared/ui'
import { useFormik } from 'formik'
import React from 'react'

import { initialValues, INPUT_ARIA_LABEL, PLACEHOLDER } from './constants'
import { SiteSearchDesktop } from './siteSearchDesktop'
import { SiteSearchMobile } from './siteSearchMobile'
import { SearchForm, SiteSearchProps } from './types'

export const SiteSearch: React.FC<SiteSearchProps> = ({
  view = VIEW.DESKTOP,
}) => {
  const handleSubmitFormik = ({ term }: SearchForm) => {
    alert(term)
  }

  const {
    handleChange,
    handleSubmit,
    resetForm,
    values: { term },
  } = useFormik<SearchForm>({
    initialValues,
    onSubmit: handleSubmitFormik,
  })

  const handleClose = () => {
    resetForm()
  }

  const props = {
    'aria-label': INPUT_ARIA_LABEL,
    icon: <SearchIcon />,
    name: 'term',
    onChange: handleChange,
    onSubmit: handleSubmit,
    placeholder: PLACEHOLDER,
    value: term,
  }

  return view === VIEW.DESKTOP ? (
    <SiteSearchDesktop {...props} onClose={handleClose} />
  ) : (
    <SiteSearchMobile {...props} />
  )
}
