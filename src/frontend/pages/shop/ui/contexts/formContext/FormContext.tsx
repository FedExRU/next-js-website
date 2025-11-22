import React from 'react'

import { FormContextProps } from './types'

export const FormContext: React.Context<FormContextProps> = React.createContext(
  {
    handleSubmit: () => {},
    resetForm: () => {},
  },
)

export const useFormContext = (): FormContextProps => {
  const context = React.useContext(FormContext)

  if (!context) {
    throw new Error('Hook useFormContext must be used within FormContext!')
  }

  return context
}
