import { EnvelopeIcon, Typography } from '@fsd/shared'
import { Box, FormControl, FormHelperText, TextField } from '@mui/material'

import { useSubscribeForm } from '../../model'
import { SubmitButton } from './components'
import { getStyles } from './styles'

const { styles } = getStyles()

export const SubscribeForm = () => {
  const { errors, formAction, handleChange, isValid, state, values } =
    useSubscribeForm()
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
        <Box action={formAction} component="form" noValidate sx={styles.form}>
          <FormControl error={!state.success || !isValid}>
            <TextField
              slotProps={{
                input: {
                  endAdornment: <SubmitButton />,
                  error: !state.success || !isValid,
                  inputProps: {
                    'aria-describedby': 'signup-email-error-text',
                    'aria-label': 'Email Address',
                  },
                  name: 'email',
                  onChange: handleChange,
                  placeholder: 'Email Address',
                  size: 'medium',
                  startAdornment: <EnvelopeIcon />,
                  type: 'email',
                  value: values.email,
                },
              }}
              variant="standard"
            />
            <FormHelperText id="signup-email-error-text" sx={{ minHeight: 22 }}>
              {errors?.email || (!state.success && state.message)}
            </FormHelperText>
          </FormControl>
        </Box>
      </Box>
    </Box>
  )
}
