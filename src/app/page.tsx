import { Typography, Container, Card, Box, Button } from '@mui/material'

export default function Home() {
  return (
    <main>
      <Container>
        <Box>
          <Card>
            <Box display="flex">
              <Box>
                <Box sx={{ height: 50, width: 50 }} bgcolor="primary.main" />
                <Box sx={{ height: 50, width: 50 }} bgcolor="secondary.main" />
                <Box sx={{ height: 50, width: 50 }} bgcolor="error.main" />
                <Box sx={{ height: 50, width: 50 }} bgcolor="warning.main" />
                <Box sx={{ height: 50, width: 50 }} bgcolor="success.main" />
              </Box>
              <Box style={{ marginLeft: 16 }}>
                <Box sx={{ height: 50, width: 50 }} bgcolor="grey.700" />
                <Box sx={{ height: 50, width: 50 }} bgcolor="grey.600" />
                <Box sx={{ height: 50, width: 50 }} bgcolor="grey.500" />
                <Box sx={{ height: 50, width: 50 }} bgcolor="grey.400" />
                <Box sx={{ height: 50, width: 50 }} bgcolor="grey.300" />
                <Box sx={{ height: 50, width: 50 }} bgcolor="grey.200" />
                <Box sx={{ height: 50, width: 50 }} bgcolor="grey.100" />
              </Box>
            </Box>
          </Card>
          <Card>
            <Box display="flex">
              <Box>
                <Typography variant="h1">Heading 1</Typography>
                <Typography variant="h2">Heading 2</Typography>
                <Typography variant="h3">Heading 3</Typography>
                <Typography variant="h4">Heading 4</Typography>
                <Typography variant="h5">Heading 5</Typography>
                <Typography variant="h6">Heading 6</Typography>
                <Typography variant="h7">Heading 7</Typography>
              </Box>
              <Box style={{ marginLeft: 16 }}>
                <Typography variant="text1">Text 26</Typography>
                <Typography variant="text2">Text 22</Typography>
                <Typography variant="body1">Text 20</Typography>
                <Typography variant="text3">Text 18</Typography>
                <Typography variant="body2">Text 16</Typography>
                <Typography variant="caption1">Text 14</Typography>
                <br />
                <Typography variant="caption2">Text 12</Typography>
              </Box>
              <Box style={{ marginLeft: 16 }}>
                <Typography variant="text1Semi">Text 26</Typography>
                <Typography variant="text2Semi">Text 22</Typography>
                <Typography variant="body1Semi">Text 20</Typography>
                <Typography variant="text3Semi">Text 18</Typography>
                <Typography variant="body2Semi">Text 16</Typography>
                <Typography variant="caption1Semi">Text 14</Typography>
                <br />
                <Typography variant="caption2Semi">Text 12</Typography>
              </Box>
              <Box style={{ marginLeft: 16 }}>
                <Typography variant="text1Bold">Text 26</Typography>
                <Typography variant="text2Bold">Text 22</Typography>
                <Typography variant="body1Bold">Text 20</Typography>
                <Typography variant="text3Bold">Text 18</Typography>
                <Typography variant="body2Bold">Text 16</Typography>
                <Typography variant="caption1Bold">Text 14</Typography>
                <br />
                <Typography variant="caption2Bold">Text 12</Typography>
              </Box>
              <Box style={{ marginLeft: 16 }}>
                <Typography variant="subtitle1">Subtitle 1</Typography>
                <Typography variant="subtitle2">Subtitle 2</Typography>
              </Box>
            </Box>
          </Card>
          <Card>
            <Box mt={5} mb={5}>
              <Button variant="contained">Button contained</Button>
              <Button variant="outlined" color="secondary">
                Button outlined
              </Button>
              <Button variant="text" color="primary" size="small">
                Button text
              </Button>
              <Button variant="text" color="secondary" size="small">
                Button text
              </Button>
            </Box>
          </Card>
        </Box>
      </Container>
    </main>
  )
}
