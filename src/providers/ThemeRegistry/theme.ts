import { createTheme } from '@mui/material'
import localFont from 'next/font/local'

const poppinsFont = localFont({
  src: './assets/fonts/poppins/Poppins-Medium.ttf',
})

const interFontReguar = localFont({
  src: './assets/fonts/inter/static/Inter-Regular.ttf',
})

const interFontMedium = localFont({
  src: './assets/fonts/inter/static/Inter-Medium.ttf',
})

const interFontSemi = localFont({
  src: './assets/fonts/inter/static/Inter-SemiBold.ttf',
})

const interFontBold = localFont({
  src: './assets/fonts/inter/static/Inter-Bold.ttf',
})

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#377DFF',
    },
    error: {
      main: '#FF5630',
    },
    warning: {
      main: '#FFAB00',
    },
    success: {
      main: '#38CB89',
    },
    grey: {
      '700': '#141718',
      '600': '#232627',
      '500': '#343839',
      '400': '#6C7275',
      '300': '#E8ECEF',
      '200': '#F3F5F7',
      '100': '#FEFEFE',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          /**
           * Headings
           */
          h7: 'h6',
          /**
           * Text
           */
          text1: 'p',
          text1Semi: 'p',
          text1Bold: 'p',
          text2: 'p',
          text2Semi: 'p',
          text2Bold: 'p',
          text3: 'p',
          text3Semi: 'p',
          text3Bold: 'p',
          body1Semi: 'p',
          body1Bold: 'p',
          body2Semi: 'p',
          body2Bold: 'p',
          caption1: 'span',
          caption1Semi: 'span',
          caption1Bold: 'span',
          caption2: 'span',
          caption2Semi: 'span',
          caption2Bold: 'span',
        },
      },
      variants: [
        {
          props: { variant: 'text1Semi' },
          style: ({ theme }) => ({
            ...theme.typography.text1,
            fontWeight: 600,
            fontFamily: interFontSemi.style.fontFamily,
          }),
        },
        {
          props: { variant: 'text1Bold' },
          style: ({ theme }) => ({
            ...theme.typography.text1,
            fontWeight: 700,
            fontFamily: interFontBold.style.fontFamily,
          }),
        },
        {
          props: { variant: 'text2Semi' },
          style: ({ theme }) => ({
            ...theme.typography.text2,
            fontWeight: 600,
            fontFamily: interFontSemi.style.fontFamily,
          }),
        },
        {
          props: { variant: 'text2Bold' },
          style: ({ theme }) => ({
            ...theme.typography.text2,
            fontWeight: 700,
            fontFamily: interFontBold.style.fontFamily,
          }),
        },
        {
          props: { variant: 'text3Semi' },
          style: ({ theme }) => ({
            ...theme.typography.text3,
            fontWeight: 600,
            fontFamily: interFontSemi.style.fontFamily,
          }),
        },
        {
          props: { variant: 'text3Bold' },
          style: ({ theme }) => ({
            ...theme.typography.text3,
            fontWeight: 700,
            fontFamily: interFontBold.style.fontFamily,
          }),
        },
        {
          props: { variant: 'body1Semi' },
          style: ({ theme }) => ({
            ...theme.typography.body1,
            fontWeight: 600,
            fontFamily: interFontSemi.style.fontFamily,
          }),
        },
        {
          props: { variant: 'body1Bold' },
          style: ({ theme }) => ({
            ...theme.typography.body1,
            fontWeight: 700,
            fontFamily: interFontBold.style.fontFamily,
          }),
        },
        {
          props: { variant: 'body2Semi' },
          style: ({ theme }) => ({
            ...theme.typography.body2,
            fontWeight: 600,
            fontFamily: interFontSemi.style.fontFamily,
          }),
        },
        {
          props: { variant: 'body2Bold' },
          style: ({ theme }) => ({
            ...theme.typography.body2,
            fontWeight: 700,
            fontFamily: interFontBold.style.fontFamily,
          }),
        },
        {
          props: { variant: 'caption1Semi' },
          style: ({ theme }) => ({
            ...theme.typography.caption1,
            fontWeight: 600,
            fontFamily: interFontSemi.style.fontFamily,
          }),
        },
        {
          props: { variant: 'caption1Bold' },
          style: ({ theme }) => ({
            ...theme.typography.caption1,
            fontWeight: 700,
            fontFamily: interFontBold.style.fontFamily,
          }),
        },
        {
          props: { variant: 'caption2Semi' },
          style: ({ theme }) => ({
            ...theme.typography.caption2,
            fontWeight: 600,
            fontFamily: interFontSemi.style.fontFamily,
          }),
        },
        {
          props: { variant: 'caption2Bold' },
          style: ({ theme }) => ({
            ...theme.typography.caption2,
            fontWeight: 700,
            fontFamily: interFontBold.style.fontFamily,
          }),
        },
        {
          props: { variant: 'subtitle1' },
          style: ({ theme }) => ({
            ...theme.typography.body1,
          }),
        },
        {
          props: { variant: 'subtitle2' },
          style: ({ theme }) => ({
            ...theme.typography.text3,
          }),
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          padding: '5px 40px',
          height: 28,
        },
        sizeMedium: {
          padding: '10px 40px',
          height: 40,
        },
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '28px',
          letterSpacing: '-0.4px',
          fontFamily: interFontMedium.style.fontFamily,
        },
        textPrimary: ({ theme }) => ({
          color: theme.palette.grey['700'],
          borderBottomColor: `1px solid ${theme.palette.grey['700']}`,
        }),
        text: {
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          '&:hover': {
            background: 'transparent',
          },
        },
        textSizeSmall: {
          paddingLeft: 0,
          paddingRight: 0,
        },
        outlinedSecondary: ({ theme }) => ({
          border: 'none',
          color: theme.palette.grey['400'],
          '&:hover': {
            border: 'none',
            background: theme.palette.grey['200'],
          },
        }),
      },
    },
  },
  typography: palette => ({
    /**
     * Default
     */
    allVariants: {
      fontFamily: interFontReguar.style.fontFamily,
      color: palette.grey['700'],
    },
    /**
     * Headings
     */
    h1: {
      fontFamily: poppinsFont.style.fontFamily,
      fontSize: '80px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '84px',
      letterSpacing: '-3px',
    },
    h2: {
      fontFamily: poppinsFont.style.fontFamily,
      fontSize: '72px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '76px',
      letterSpacing: '-2px',
    },
    h3: {
      fontFamily: poppinsFont.style.fontFamily,
      fontSize: '54px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '58px',
      letterSpacing: '-1px',
    },
    h4: {
      fontFamily: poppinsFont.style.fontFamily,
      fontSize: '40px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '44px',
      letterSpacing: '-0.4px',
    },
    h5: {
      fontFamily: poppinsFont.style.fontFamily,
      fontSize: '34px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '38px',
      letterSpacing: '-0.6px',
    },
    h6: {
      fontFamily: poppinsFont.style.fontFamily,
      fontSize: '28px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '34px',
      letterSpacing: '-0.6px',
    },
    h7: {
      fontFamily: poppinsFont.style.fontFamily,
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '28px',
      color: palette.grey['600'],
    },
    /**
     * Text
     */
    text1: {
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '40px',
    },
    text2: {
      fontSize: '22px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '34px',
    },
    body1: {
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '32px',
    },
    text3: {
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '30px',
    },
    body2: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '26px',
    },
    caption: {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '22px',
    },
    caption1: {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '22px',
    },
    caption2: {
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '20px',
    },
  }),
})
