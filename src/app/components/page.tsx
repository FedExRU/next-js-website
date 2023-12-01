import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import TextField from '@mui/material/TextField'
import Breadcrumbs from 'components/client/Breadcrumbs'
import Select from 'components/client/Select'
import { Foo } from './Foo'
import BadgeNew from 'components/client/BadgeNew'

export default function Components() {
  return (
    <Box>
      <Box mb={2}>
        <Breadcrumbs />
      </Box>
      <Box mb={2}>
        <Rating value={3} />
      </Box>
      <Box ml={5} pr={5} mb={2}>
        <Select
          label="Room"
          placeholder="Select your room"
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
        />
      </Box>
      <Box mb={2}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
      <Box mb={2} width={300}>
        <Foo />
      </Box>
      <Box mb={2} bgcolor="common.black">
        <BadgeNew />
        <BadgeNew size="large" />
      </Box>
    </Box>
  )
}
