import { createSxStyles } from '@fsd/shared'

export const getStyles = () =>
  createSxStyles({
    footer: {
      backgroundColor: 'grey.700',
      color: 'grey.300',
    },
    footerCopyrightAndSocialBlock: {
      mb: 2.5,
      mt: {
        md: 2,
        xs: 3,
      },
    },
    footerFlexWrapper: {
      display: 'flex',
      height: '100%',
    },
    footerLogoDivider: {
      height: {
        md: 24,
        xs: 1,
      },
      m: {
        md: undefined,
        xs: 'auto',
      },
      width: {
        md: 1,
        xs: 24,
      },
    },
    footerLogoWrapper: {
      display: 'flex',
      height: '100%',
      justifyContent: {
        md: 'flex-start',
        xs: 'center',
      },
    },
    footerSectionsDividerWraper: {
      mt: 6,
    },
    footerSlogan: {
      color: 'grey.300',
      display: 'flex',
      height: '100%',
      justifyContent: {
        md: 'flex-start',
        xs: 'center',
      },
    },
    footerSocialNetworks: {
      display: 'flex',
      height: '100%',
      justifyContent: {
        md: 'flex-end',
        xs: 'center',
      },
    },
    footerWrapper: {
      pb: {
        md: 4,
        xs: 6,
      },
      pt: {
        md: 10,
        xs: 6,
      },
    },
  })
