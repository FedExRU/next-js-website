'use client'

import { useFormStatus } from 'react-dom'

import { Button } from '../../../../../shared/ui'

export const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <Button
      disabled={pending}
      sx={{
        '&:focus': { color: 'text.primary' },
        '@media (hover: hover)': {
          '&:hover': { color: 'text.primary' },
        },

        borderBottom: 'none',
      }}
      type="submit"
      variant="text"
    >
      Signup
    </Button>
  )
}
