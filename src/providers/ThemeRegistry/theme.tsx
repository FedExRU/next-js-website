import { createTheme } from '@mui/material'
// eslint-disable-next-line no-restricted-imports
import _shadows from '@mui/material/styles/shadows'
import localFont from 'next/font/local'
import {
  CheckboxIcon,
  CheckboxCheckedIcon,
  RadioIcon,
  RadioCheckedIcon,
  ChevronRightIcon,
  StarIconOutlined,
  StarIconFilled,
  ArrowDownSimpleIcon,
} from 'components/client/Icons'

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

const shadows = (() => {
  const s = _shadows

  s[8] = '0px 64px 64px -48px rgba(15, 15, 15, 0.10);'

  return s
})()

console.log('foo', shadows)

export const theme = createTheme({
  palette: {
    text: {
      primary: '#000',
      secondary: '#6C7275',
    },
    action: {
      active: '#6C7275',
    },
    primary: {
      main: '#000',
      light: '#605F5F',
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
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiInputBase: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        input: ({ theme }) => ({
          ...theme.typography.body2,
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(1),
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(1),
          height: 36,
        }),
        sizeSmall: {
          height: 48,
        },
        inputSizeSmall: {
          height: 48,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: ({ theme }) => ({
          border: `2px solid ${theme.palette.text.secondary}`,
          borderRadius: 8,
          '& legend span:not(.notranslate)': {
            display: 'none',
          },
        }),
        input: ({ theme }) => ({
          ...theme.typography.body2,
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(1),
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(1),
        }),
        inputSizeSmall: {
          height: 32,
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        notched: true,
        size: 'small',
        IconComponent: ArrowDownSimpleIcon,
        MenuProps: {
          sx: theme => ({
            '& .MuiPopover-paper': {
              borderRadius: 3,
            },
            '& .MuiMenu-list': {
              paddingLeft: theme.spacing(1),
              paddingRight: theme.spacing(1),
              paddingTop: theme.spacing(1),
              paddingBottom: theme.spacing(1),
            },
            '& .MuiMenuItem-root': {
              ...theme.typography.body2,
              borderRadius: 2,
              paddingLeft: theme.spacing(1),
              paddingRight: theme.spacing(1),
              paddingTop: theme.spacing(1),
              paddingBottom: theme.spacing(1),
              color: theme.palette.text.secondary,
              transition: theme.transitions.create(
                ['background-color, color'],
                { duration: 300 },
              ),
              '&.Mui-selected': {
                backgroundColor: theme.palette.grey['200'],
                color: theme.palette.text.primary,
              },
              '&:hover': {
                backgroundColor: theme.palette.grey['200'],
                color: theme.palette.text.primary,
              },
            },
          }),
        },
      },
      styleOverrides: {
        outlined: {
          minHeight: 32,
        },
        select: ({ theme, ownerState: { size = 'small' } }) => ({
          ...theme.typography.body2,
          fontWeight: 600,
          fontFamily: interFontSemi.style.fontFamily,
          ...(size === 'small' && {
            display: 'flex',
            alignItems: 'center',
          }),
        }),
        iconOutlined: ({ theme, ownerState: { size = 'small' } }) => ({
          ...(size === 'small' && {
            marginRight: theme.spacing(0.5),
          }),
        }),
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          position: 'static',
          transform: 'none',
          textTransform: 'uppercase',
          ...theme.typography.body2,
          fontWeight: 600,
          fontFamily: interFontSemi.style.fontFamily,
          color: theme.palette.text.secondary,
          marginBottom: theme.spacing(1),
        }),
      },
    },
    MuiRating: {
      defaultProps: {
        emptyIcon: <StarIconOutlined />,
        icon: <StarIconFilled />,
      },
      styleOverrides: {
        iconFilled: ({ theme }) => ({
          color: theme.palette.primary.main,
        }),
        iconEmpty: ({ theme }) => ({
          color: theme.palette.grey['400'],
        }),
      },
    },
    MuiBreadcrumbs: {
      defaultProps: {
        separator: (
          <ChevronRightIcon
            fontSize="small"
            sx={{ height: 12, width: 12, paddingTop: '1px' }}
          />
        ),
      },
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.button,
          textTransform: 'capitalize',
        }),
        separator: ({ theme }) => ({
          color: theme.palette.primary.light,
          marginLeft: theme.spacing(0.5),
          marginRight: theme.spacing(2),
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        sizeMedium: ({ theme }) => ({
          height: 40,
          width: 40,
          padding: theme.spacing(1),
        }),
        sizeLarge: ({ theme }) => ({
          height: 52,
          width: 52,
          padding: theme.spacing(1.25),
        }),
        root: ({ theme, ownerState: { color } }) => ({
          background: theme.palette.common.white,
          boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.04)',
          transition: theme.transitions.create('color'),
          '&:hover': {
            background: 'inherit',
            color:
              color === undefined || color === 'default' || color === 'inherit'
                ? 'currentColor'
                : theme.palette?.[color].main,
          },
        }),
      },
    },
    MuiRadio: {
      defaultProps: {
        icon: <RadioIcon />,
        checkedIcon: <RadioCheckedIcon />,
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ theme, ownerState: { color } }) => ({
          padding: 0,
          transition: theme.transitions.create('color'),
          '&:hover': {
            color:
              color === undefined || color === 'default'
                ? 'currentColor'
                : theme.palette?.[color].main,
          },
        }),
      },
    },
    MuiCheckbox: {
      defaultProps: {
        icon: <CheckboxIcon />,
        checkedIcon: <CheckboxCheckedIcon />,
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ theme, ownerState: { color } }) => ({
          padding: 0,
          transition: theme.transitions.create('color'),
          '&:hover': {
            color:
              color === undefined || color === 'default'
                ? 'currentColor'
                : theme.palette?.[color].main,
          },
        }),
      },
    },
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
      defaultProps: {
        rounded: 'medium',
      },
      variants: [
        {
          props: { size: 'xSmall' },
          style: ({ theme }) => ({
            height: 28,
            padding: theme.spacing(0.5, 5),
            ...theme.typography.button,
          }),
        },
        {
          props: { size: 'xLarge' },
          style: ({ theme }) => ({
            height: 56,
            padding: theme.spacing(2, 5),
            fontSize: '26px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '38px',
          }),
        },
        {
          props: { rounded: 'small' },
          style: {
            borderRadius: 6,
          },
        },
        {
          props: { rounded: 'medium' },
          style: {
            borderRadius: 8,
          },
        },
        {
          props: { rounded: 'large' },
          style: {
            borderRadius: 80,
          },
        },
      ],
      styleOverrides: {
        text: {
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderRadius: '0px !important',
          padding: '0px !important',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '& .MuiTouchRipple-child': { borderRadius: '0px !important' },
        },
        sizeSmall: ({ theme }) => ({
          padding: theme.spacing(0.75, 5),
          height: 34,
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '28px',
          letterSpacing: '-0.4px',
        }),
        sizeMedium: ({ theme }) => ({
          padding: theme.spacing(1.25, 5),
          height: 42,
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '32px',
          letterSpacing: '-0.4px',
        }),
        sizeLarge: ({ theme }) => ({
          padding: theme.spacing(1.5, 5),
          height: 48,
          fontSize: '22px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '34px',
        }),
        root: {
          textTransform: 'none',
          fontFamily: interFontMedium.style.fontFamily,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeMedium: {
          fontSize: '1.5rem',
        },
        fontSizeLarge: {
          fontSize: '2rem',
        },
      },
    },
  },
  shadows,
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
    body2Semi: {
      fontFamily: interFontSemi.style.fontFamily,
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '26px',
    },
    body2Bold: {
      fontFamily: interFontBold.style.fontFamily,
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '26px',
    },
    hairline2: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '16px',
    },
    hairline2Bold: {
      fontFamily: interFontBold.style.fontFamily,
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '16px',
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
    button: {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '24px',
      textTransform: 'none',
    },
  }),
  transitions: {
    duration: {
      standard: 150,
    },
  },
})