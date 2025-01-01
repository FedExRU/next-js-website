import { useFormStatus } from 'react-dom'
import { Button } from '@fsd/shared'

export const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      variant="text"
      disabled={pending}
      sx={{
        borderBottom: 'none',
        color: pending ? 'red' : 'text.secondary',
        '&:hover': { color: 'text.primary' },
        '&:focus': { color: 'text.primary' },
      }}
    >
      Signup
    </Button>
  )
}
