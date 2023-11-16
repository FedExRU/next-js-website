import { Typography, Container, Card, Box } from '@mui/material'

export default function Home() {
  return (
    <main>
      <Container>
        <Box>
          <Card>
            <Typography variant="h2">Lest&apos;s get started</Typography>
            <Box sx={{ height: 50, width: 50 }} bgcolor="primary.main" />
            <Box sx={{ height: 50, width: 50 }} bgcolor="secondary.main" />
            <Box sx={{ height: 50, width: 50 }} bgcolor="error.main" />
            <Box sx={{ height: 50, width: 50 }} bgcolor="warning.main" />
            <Box sx={{ height: 50, width: 50 }} bgcolor="success.main" />
          </Card>
        </Box>
      </Container>
    </main>
  )
}
