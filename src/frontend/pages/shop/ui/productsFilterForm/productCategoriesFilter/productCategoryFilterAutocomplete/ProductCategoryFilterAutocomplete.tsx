import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { ANY_CATEGORY } from './constants'
import { ProductCategoryFilterAutocompleteProps } from './types'

export const ProductCategoryFilterAutocomplete: React.FC<
  ProductCategoryFilterAutocompleteProps
> = ({ label, name, onChange, options: optionProps = [], value }) => {
  const handleChange = (
    event: React.SyntheticEvent,
    value: { id: number | string; value: string },
  ) => {
    onChange?.(event, value, value)
  }

  const options = [ANY_CATEGORY, ...optionProps]

  return (
    <Autocomplete
      disableClearable
      disablePortal
      getOptionKey={value => value.id}
      getOptionLabel={value => value.value}
      onChange={handleChange}
      options={options}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          name={name ?? ''}
          placeholder="Enter a category..."
          size="small"
          slotProps={{
            inputLabel: {
              focused: true,
            },
          }}
        />
      )}
      renderOption={(props, option) => (
        <Box {...props} component="li" key={option.id}>
          <Typography variant="body2Semi">{option.value}</Typography>
        </Box>
      )}
      value={options?.find(({ id }) => String(id) === value)}
    />
  )
}
