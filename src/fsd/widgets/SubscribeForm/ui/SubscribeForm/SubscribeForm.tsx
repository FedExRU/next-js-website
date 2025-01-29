import { EnvelopeIcon, Typography } from '@fsd/shared'
import { Box, FormControl, FormHelperText, TextField } from '@mui/material'
import { useId } from 'react'

import { useSubscribeForm } from '../../model'
import { SubmitButton } from './components'
import { getStyles } from './styles'

const { styles } = getStyles()

export const SubscribeForm = () => {
  const {
    action,
    formKey,
    inputRef,
    state: { email, message, success } = {},
    validate,
  } = useSubscribeForm()

  const formHelperTextHint = useId()

  return (
    <Box sx={styles.subscribeForm}>
      <Box sx={styles.subscribeFormContent}>
        <Typography
          align="center"
          component="p"
          sx={styles.title}
          variant={{ sm: 'h4', xs: 'h6' }}
        >
          Join Our Newsletter
        </Typography>
        <Typography
          align="center"
          component="p"
          variant={{ sm: 'hairline1', xs: 'caption1' }}
        >
          Sign up for deals, new products and promotions
        </Typography>
        <Box action={action} component="form" key={formKey} sx={styles.form}>
          <FormControl error={!success}>
            <TextField
              slotProps={{
                input: {
                  defaultValue: email,
                  endAdornment: <SubmitButton />,
                  error: !success,
                  inputProps: {
                    'aria-describedby': formHelperTextHint,
                    'aria-label': 'Email Address',
                  },
                  inputRef,
                  name: 'email',
                  onInput: validate,
                  placeholder: 'Email Address',
                  required: true,
                  size: 'medium',
                  startAdornment: <EnvelopeIcon />,
                  type: 'email',
                },
              }}
              variant="standard"
            />
            <FormHelperText id={formHelperTextHint} sx={{ minHeight: 22 }}>
              {!success && message}
            </FormHelperText>
          </FormControl>
        </Box>
      </Box>
    </Box>
  )
}
