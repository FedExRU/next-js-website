import { Button, useMediaQuery } from '@mui/material'

export const AddToCart: React.FC = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))
  return (
    <Button fullWidth size={isMobile ? 'small' : 'medium'} variant="contained">
      Add to cart
    </Button>
  )
}
