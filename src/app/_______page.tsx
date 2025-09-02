import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import TextField from '@mui/material/TextField'
import { BadgeDiscount } from 'components/BadgeDiscount'
import { BadgeNew } from 'components/BadgeNew'
import { Breadcrumbs } from 'components/Breadcrumbs'
import { Select } from 'components/Select'

import { NavBar, SubscribeForm } from './_components'

export default function Components() {
  return (
    <Box bgcolor="grey.300">
      <NavBar />
      <Box mb={2}>
        <Breadcrumbs />
      </Box>
      <Box mb={2}>
        <Rating value={3} />
      </Box>
      <Box mb={2} ml={5} pr={5}>
        <Select
          items={[
            {
              label: 'Living Room',
              value: 1,
            },
            {
              label: 'Bedroom',
              value: 2,
            },
          ]}
          label="Room"
          placeholder="Select your room"
        />
      </Box>
      <Box mb={2}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
      <Box mb={2} width={300}>
        <SubscribeForm />
      </Box>
      <Box bgcolor="common.black" mb={2}>
        <BadgeNew />
        <BadgeNew size="large" />
        <BadgeDiscount value={50} />
        <BadgeDiscount size="large" value={50} />
      </Box>
    </Box>
  )
}
