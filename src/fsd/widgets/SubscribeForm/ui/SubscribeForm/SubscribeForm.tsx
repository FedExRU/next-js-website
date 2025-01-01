import { Box, FormControl, FormHelperText, TextField } from '@mui/material'
import { useSubscribeForm } from '../../model'
import { getStyles } from './styles'
import { SubmitButton } from './components'
import { EnvelopeIcon, Typography } from '@fsd/shared'

const { styles } = getStyles()

export const SubscribeForm = () => {
  const { isValid, errors, handleChange, values, state, formAction } =
    useSubscribeForm()
  return (
    <Box sx={styles.subscribeForm}>
      <Box sx={styles.subscribeFormContent}>
        <Typography
          variant={{ xs: 'h6', sm: 'h4' }}
          component="p"
          sx={styles.title}
          align="center"
        >
          Join Our Newsletter
        </Typography>
        <Typography
          variant={{ xs: 'caption1', sm: 'hairline1' }}
          component="p"
          align="center"
        >
          Sign up for deals, new products and promotions
        </Typography>
        <Box sx={styles.form} component="form" noValidate action={formAction}>
          <FormControl error={!state.success || !isValid}>
            <TextField
              variant="standard"
              slotProps={{
                input: {
                  name: 'email',
                  value: values.email,
                  onChange: handleChange,
                  size: 'medium',
                  error: !state.success || !isValid,
                  type: 'email',
                  placeholder: 'Email Address',
                  startAdornment: <EnvelopeIcon />,
                  inputProps: {
                    'aria-describedby': 'signup-email-error-text',
                    'aria-label': 'Email Address',
                  },
                  endAdornment: <SubmitButton />,
                },
              }}
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
