import { Button } from '@fsd/shared'
import { useFormStatus } from 'react-dom'

export const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <Button
      disabled={pending}
      sx={{
        '&:focus': { color: 'text.primary' },
        '&:hover': { color: 'text.primary' },
        borderBottom: 'none',
      }}
      type="submit"
      variant="text"
    >
      Signup
    </Button>
  )
}
