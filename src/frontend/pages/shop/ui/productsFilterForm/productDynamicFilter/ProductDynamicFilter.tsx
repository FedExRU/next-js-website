import { useDebounce } from '@frontend/shared/lib'
import { TextField } from '@mui/material'

import { useFormContext } from '../../contexts'
import { ProductFilterDictionary } from './productFilterDictionary'
import { ProductFilterNumber } from './productFilterNumber'
import { ProductDynamicFilterProps } from './types'

export const ProductDynamicFilter = <
  TComponentProps extends Record<string, unknown>,
>({
  attributeType,
  Component,
  id,
  label,
  name,
  onChange,
  options,
  values = [],
}: ProductDynamicFilterProps<TComponentProps>) => {
  const { handleSubmit } = useFormContext()
  const handleSubmitDebounced = useDebounce(handleSubmit)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSubmitDebounced()
    onChange(event)
  }

  const baseProps = {
    attributeType,
    id,
    label,
    onChange: handleChange,
  }

  if (Component) {
    return (
      <Component
        {...(baseProps as unknown as TComponentProps)}
        name={name}
        options={options}
        value={values}
      />
    )
  }

  if (attributeType === 'NUMBER' && typeof name === 'object') {
    return (
      <ProductFilterNumber
        {...baseProps}
        name={name}
        value={values as [string, string] | [string]}
      />
    )
  }
  if (
    attributeType === 'DICTIONARY' &&
    values.length === 1 &&
    typeof name === 'string'
  ) {
    return (
      <ProductFilterDictionary
        {...baseProps}
        name={name}
        options={options}
        value={values[0]}
      />
    )
  }

  if (values.length === 1 && typeof name === 'string') {
    return <TextField {...baseProps} name={name} value={values[0]} />
  }
}
