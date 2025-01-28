import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  IconButton,
  Radio,
  Typography,
} from '@mui/material'
import {
  ArrowLeftLargeIcon,
  ArrowLeftMediumIcon,
  ArrowLeftSmallIcon,
  ArrowRightLargeIcon,
  ArrowRightMediumIcon,
  ArrowRightSmallIcon,
  CalendarIcon,
  CallIcon,
  CameraIcon,
  CloseIcon,
  EditIcon,
  EnvelopeIcon,
  FacebookIcon,
  GridLargeIcon,
  GridMediumIcon,
  GridSmallIcon,
  GridXLargeIcon,
  HeartIconFilled,
  HeartIconOutlined,
  InstagramIcon,
  LockIcon,
  MailIcon,
  PaymentIcon,
  SearchIcon,
  ShippingIcon,
  ShoppingBagIcon,
  StarIconFilled,
  StarIconOutlined,
  StoreIcon,
  TicketPercentIcon,
  UserIcon,
  YoutubeIcon,
} from 'components/Icons'

export default function Home() {
  return (
    <Box component="main">
      <Container>
        <Box>
          <Card>
            <Box display="flex">
              <Box>
                <Box bgcolor="primary.main" sx={{ height: 50, width: 50 }} />
                <Box bgcolor="secondary.main" sx={{ height: 50, width: 50 }} />
                <Box bgcolor="error.main" sx={{ height: 50, width: 50 }} />
                <Box bgcolor="warning.main" sx={{ height: 50, width: 50 }} />
                <Box bgcolor="success.main" sx={{ height: 50, width: 50 }} />
              </Box>
              <Box style={{ marginLeft: 16 }}>
                <Box bgcolor="grey.700" sx={{ height: 50, width: 50 }} />
                <Box bgcolor="grey.600" sx={{ height: 50, width: 50 }} />
                <Box bgcolor="grey.500" sx={{ height: 50, width: 50 }} />
                <Box bgcolor="grey.400" sx={{ height: 50, width: 50 }} />
                <Box bgcolor="grey.300" sx={{ height: 50, width: 50 }} />
                <Box bgcolor="grey.200" sx={{ height: 50, width: 50 }} />
                <Box bgcolor="grey.100" sx={{ height: 50, width: 50 }} />
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
            <Box mb={2} mt={5}>
              <Button rounded="small" variant="contained">
                Rounded small
              </Button>
              <Box display="inline-block" marginLeft={1} marginRight={1}>
                <Button rounded="medium" variant="contained">
                  Rounded medium
                </Button>
              </Box>
              <Button rounded="large" variant="contained">
                Rounded large
              </Button>
            </Box>
            <Box mb={2}>
              <Box display="inline-block" marginRight={1}>
                <Button size="xLarge" variant="contained">
                  Button contained xLarge
                </Button>
              </Box>
              <Button size="large" variant="contained">
                Button contained large
              </Button>
            </Box>
            <Box mb={2}>
              <Box display="inline-block" marginRight={1}>
                <Button size="xSmall" variant="text">
                  Button text xSmall
                </Button>
              </Box>
              <Button variant="text">Button text medium</Button>
            </Box>
            <Box mb={2}>
              <Button size="medium" variant="contained">
                Button contained medium
              </Button>
              <Box display="inline-block" marginLeft={1} marginRight={1}>
                <Button size="small" variant="contained">
                  Button contained small
                </Button>
              </Box>
              <Button size="xSmall" variant="contained">
                Button contained xSmall
              </Button>
            </Box>
            <Box mb={5}>
              <SearchIcon />
              <UserIcon />
              <ShoppingBagIcon />
              <HeartIconOutlined />
              <HeartIconFilled />
              <TicketPercentIcon />
              <ShippingIcon />
              <PaymentIcon />
              <CallIcon />
              <LockIcon />
              <StoreIcon />
              <MailIcon />
              <InstagramIcon />
              <FacebookIcon />
              <YoutubeIcon />
              <CalendarIcon />
              <CameraIcon />
              <ArrowLeftSmallIcon />
              <ArrowRightSmallIcon />
              <ArrowLeftMediumIcon />
              <ArrowRightMediumIcon />
              <ArrowLeftLargeIcon />
              <ArrowRightLargeIcon />
              <IconButton>
                <ArrowLeftMediumIcon />
              </IconButton>
              <IconButton>
                <ArrowRightMediumIcon />
              </IconButton>
              <IconButton size="large">
                <ArrowLeftLargeIcon fontSize="large" />
              </IconButton>
              <IconButton size="large">
                <ArrowRightLargeIcon fontSize="large" />
              </IconButton>
              <EditIcon />
              <StarIconOutlined />
              <StarIconFilled />
              <Checkbox />
              <Radio />
              <EnvelopeIcon />
              <GridSmallIcon />
              <GridMediumIcon />
              <GridLargeIcon />
              <GridXLargeIcon />
              <CloseIcon />
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}
