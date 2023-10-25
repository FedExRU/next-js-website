import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material'

export default function Home() {
  return (
    <main>
      <Container>
        <Box>
          <Card>
            <Typography variant="h2">Hello World ~</Typography>
            <Button color="primary" variant="contained">Click me pls</Button>
          </Card>
        </Box>
      </Container>
    </main>
  )
}
