import Box from '@mui/material/Box'
import { FC } from 'react'
import { NavBarSearch } from '../NavBarSearch'

export const NavBarTools: FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBarSearch />
    </Box>
  )
}
