import { Button, useMediaQuery } from '@mui/material'

export const AddToCart: React.FC = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))
  return (
    <Button variant="contained" fullWidth size={isMobile ? 'small' : 'medium'}>
      Add to cart
    </Button>
  )
}
