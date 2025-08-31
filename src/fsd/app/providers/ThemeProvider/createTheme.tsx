import { DeviceType } from '@fsd/shared/lib'
import { createTheme as _createTheme, BreakpointsOptions } from '@mui/material'
import {
  ArrowDownSimpleIcon,
  CheckboxCheckedIcon,
  CheckboxIcon,
  ChevronRightIcon,
  RadioCheckedIcon,
  RadioIcon,
  StarIconFilled,
  StarIconOutlined,
} from 'components/Icons'
import mediaQuery from 'css-mediaquery'
import localFont from 'next/font/local'

const poppinsFont = localFont({
  src: './assets/fonts/poppins/Poppins-Medium.ttf',
})

const interFontRegular = localFont({
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
  const s = _createTheme().shadows

  s[8] = '0px 64px 64px -48px rgba(15, 15, 15, 0.10);'

  return s
})()

const breakpoints: BreakpointsOptions = {
  values: {
    lg: 1200,
    md: 900,
    sm: 600,
    xl: 1536,
    xs: 0,
  },
} as const

const breakpointsAlias: Record<DeviceType, number> = {
  desktop: (breakpoints as Required<BreakpointsOptions>).values.lg,
  mobile: (breakpoints as Required<BreakpointsOptions>).values.xs,
}

export const createTheme = (deviceType: DeviceType) =>
  _createTheme({
    breakpoints,
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorDefault: ({ theme }) => ({
            backgroundColor: theme.palette.common.white,
          }),
        },
      },
      MuiBreadcrumbs: {
        defaultProps: {
          separator: (
            <ChevronRightIcon
              fontSize="small"
              sx={{ height: 12, paddingTop: '1px', width: 12 }}
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
      MuiButton: {
        defaultProps: {
          rounded: 'medium',
        },
        styleOverrides: {
          root: {
            fontFamily: interFontMedium.style.fontFamily,
            textTransform: 'none',
          },
          text: {
            '& .MuiTouchRipple-child': { borderRadius: '0px !important' },
            '@media (hover: hover)': {
              '&:hover': {
                backgroundColor: 'transparent',
              },
            },

            borderBottomStyle: 'solid',
            borderBottomWidth: 1,
            borderRadius: '0px !important',
          },
          textSizeLarge: {
            padding: 0,
          },
          textSizeMedium: {
            padding: 0,
          },
          textSizeSmall: {
            padding: 0,
          },
        },
        variants: [
          {
            props: { size: 'xSmall' },
            style: ({ theme }) => ({
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 500,
              height: 28,
              lineHeight: '24px',
              padding: theme.spacing(0.5, 5),
            }),
          },
          {
            props: { size: 'small' },
            style: ({ theme }) => ({
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              height: 34,
              letterSpacing: '-0.4px',
              lineHeight: '28px',
              padding: theme.spacing(0.75, 5),
            }),
          },
          {
            props: { size: 'medium' },
            style: ({ theme }) => ({
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 500,
              height: 42,
              letterSpacing: '-0.4px',
              lineHeight: '32px',
              padding: theme.spacing(1.25, 5),
            }),
          },
          {
            props: { size: 'large' },
            style: ({ theme }) => ({
              fontSize: '22px',
              fontStyle: 'normal',
              fontWeight: 500,
              height: 48,
              lineHeight: '34px',
              padding: theme.spacing(1.5, 5),
            }),
          },
          {
            props: { size: 'xLarge' },
            style: ({ theme }) => ({
              fontSize: '26px',
              fontStyle: 'normal',
              fontWeight: 500,
              height: 56,
              lineHeight: '38px',
              padding: theme.spacing(2, 5),
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
      },
      MuiCheckbox: {
        defaultProps: {
          checkedIcon: <CheckboxCheckedIcon />,
          disableRipple: true,
          icon: <CheckboxIcon />,
        },
        styleOverrides: {
          root: ({ ownerState: { color }, theme }) => ({
            '@media (hover: hover)': {
              '&:hover': {
                color:
                  color === undefined || color === 'default'
                    ? 'currentColor'
                    : theme.palette?.[color].main,
              },
            },

            padding: 0,
            transition: theme.transitions.create('color'),
          }),
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: ({ theme }) => ({
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            [theme.breakpoints.down('sm')]: {
              maxWidth: 'none',
            },
            [theme.breakpoints.only('sm')]: {
              paddingLeft: theme.spacing(4),
              paddingRight: theme.spacing(4),
            },
            [theme.breakpoints.up('md')]: {
              maxWidth: 1168,
              paddingLeft: theme.spacing(3),
              paddingRight: theme.spacing(3),
            },
          }),
        },
      },
      MuiDivider: {
        defaultProps: {
          component: 'hr',
        },
        styleOverrides: {
          root: ({ theme }) => ({
            borderColor: theme.palette.grey['400'],
          }),
        },
      },
      MuiFormControl: {
        defaultProps: {
          fullWidth: true,
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: ({ ownerState: { color, disabled }, theme }) => ({
            '& > *': {
              pointerEvents: 'none',
            },

            '@media (hover: hover)': {
              '&:hover': {
                background: theme.palette.common.white,
                color:
                  color === undefined ||
                  color === 'default' ||
                  color === 'inherit'
                    ? 'currentColor'
                    : theme.palette?.[color].main,
              },
            },
            background: disabled
              ? `${theme.palette.grey.A200} !important`
              : theme.palette.common.white,
            boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.04)',
            transition: theme.transitions.create('color'),
          }),
          sizeLarge: ({ theme }) => ({
            height: 52,
            padding: theme.spacing(1.25),
            width: 52,
          }),
          sizeMedium: ({ theme }) => ({
            height: 40,
            padding: theme.spacing(1),
            width: 40,
          }),
        },
      },
      MuiInputBase: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {
          input: ({ theme }) => ({
            ...theme.typography.body2Semi,
            height: 36,
            paddingBottom: theme.spacing(1),
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            paddingTop: theme.spacing(1),
          }),
          inputSizeSmall: {
            height: 48,
          },
          root: {
            borderRadius: 8,
          },
          sizeSmall: {
            height: 48,
          },
        },
      },
      MuiInputLabel: {
        defaultProps: {
          shrink: true,
        },
        styleOverrides: {
          root: ({ theme }) => ({
            position: 'static',
            textTransform: 'uppercase',
            transform: 'none',
            ...theme.typography.body2,
            color: theme.palette.text.secondary,
            fontFamily: interFontSemi.style.fontFamily,
            fontWeight: 600,
            marginBottom: theme.spacing(1),
          }),
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          input: ({ theme }) => ({
            ...theme.typography.body2Semi,
            paddingBottom: theme.spacing(1),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(1),
            paddingTop: theme.spacing(1),
          }),
          inputSizeSmall: {
            height: 32,
          },
          notchedOutline: ({ theme }) => ({
            '& legend span:not(.notranslate)': {
              display: 'none',
            },
            border: `2px solid ${theme.palette.text.secondary}`,
            borderRadius: 8,
          }),
        },
      },
      MuiRadio: {
        defaultProps: {
          checkedIcon: <RadioCheckedIcon />,
          disableRipple: true,
          icon: <RadioIcon />,
        },
        styleOverrides: {
          root: ({ ownerState: { color }, theme }) => ({
            '@media (hover: hover)': {
              '&:hover': {
                color:
                  color === undefined || color === 'default'
                    ? 'currentColor'
                    : theme.palette?.[color].main,
              },
            },

            padding: 0,
            transition: theme.transitions.create('color'),
          }),
        },
      },
      MuiRating: {
        defaultProps: {
          emptyIcon: <StarIconOutlined />,
          icon: <StarIconFilled />,
        },
        styleOverrides: {
          iconEmpty: ({ theme }) => ({
            color: theme.palette.grey['400'],
          }),
          iconFilled: ({ theme }) => ({
            color: theme.palette.primary.main,
          }),
        },
      },
      MuiSelect: {
        defaultProps: {
          IconComponent: ArrowDownSimpleIcon,
          MenuProps: {
            sx: theme => ({
              '& .MuiMenu-list': {
                paddingBottom: theme.spacing(1),
                paddingLeft: theme.spacing(1),
                paddingRight: theme.spacing(1),
                paddingTop: theme.spacing(1),
              },
              '& .MuiMenuItem-root': {
                ...theme.typography.body2,
                '&.Mui-selected, &.Mui-focusVisible': {
                  backgroundColor: theme.palette.grey['200'],
                  color: theme.palette.text.primary,
                },
                '@media (hover: hover)': {
                  '&:hover': {
                    backgroundColor: theme.palette.grey['200'],
                    color: theme.palette.text.primary,
                  },
                },

                borderRadius: 2,
                color: theme.palette.text.secondary,
                paddingBottom: theme.spacing(1),
                paddingLeft: theme.spacing(1),
                paddingRight: theme.spacing(1),
                paddingTop: theme.spacing(1),
                transition: theme.transitions.create(
                  ['background-color, color'],
                  { duration: 300 },
                ),
              },
              '& .MuiPopover-paper': {
                borderRadius: 3,
              },
            }),
          },
          notched: true,
          size: 'small',
        },
        styleOverrides: {
          iconOutlined: ({ ownerState: { size = 'small' }, theme }) => ({
            ...(size === 'small' && {
              marginRight: theme.spacing(0.5),
            }),
          }),
          outlined: {
            minHeight: 32,
          },
          select: ({ ownerState: { size = 'small' }, theme }) => ({
            ...theme.typography.body2,
            fontFamily: interFontSemi.style.fontFamily,
            fontWeight: 600,
            ...(size === 'small' && {
              alignItems: 'center',
              display: 'flex',
            }),
          }),
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          fontSizeLarge: {
            fontSize: '2rem',
          },
          fontSizeMedium: {
            fontSize: '1.5rem',
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: ({ theme }) => ({
            minHeight: 60,
            [theme.breakpoints.up('sm')]: {
              minHeight: 60,
            },
          }),
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: ({ theme }) => ({
            ...theme.typography.caption2,
            color: theme.palette.common.white,
          }),
        },
      },
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            body1Bold: 'p',
            body1Semi: 'p',
            body2Bold: 'p',
            body2Semi: 'p',
            caption1: 'span',
            caption1Bold: 'span',
            caption1Semi: 'span',
            caption2: 'span',
            caption2Bold: 'span',
            caption2Semi: 'span',
            /**
             * Headings
             */
            h7: 'h6',
            hairline1: 'p',
            hairline1Bold: 'p',
            hairline1Semi: 'p',
            hairline2: 'p',
            hairline2Bold: 'p',
            hairline2Semi: 'p',
            /**
             * Text
             */
            text1: 'p',
            text1Bold: 'p',
            text1Semi: 'p',
            text2: 'p',
            text2Bold: 'p',
            text2Semi: 'p',
            text3: 'p',
            text3Bold: 'p',
            text3Semi: 'p',
          },
        },
      },
      MuiUseMediaQuery: {
        defaultProps: {
          ssrMatchMedia: query => {
            return {
              matches: mediaQuery.match(query, {
                width: breakpointsAlias[deviceType],
              }),
            }
          },
        },
      },
    },
    palette: {
      action: {
        active: '#6C7275',
      },
      error: {
        main: '#FF5630',
      },
      grey: {
        '100': '#FEFEFE',
        '200': '#F3F5F7',
        '300': '#E8ECEF',
        '400': '#6C7275',
        '500': '#343839',
        '600': '#232627',
        '700': '#141718',
      },
      primary: {
        light: '#605F5F',
        main: '#000',
      },
      secondary: {
        main: '#377DFF',
      },
      success: {
        dark: '#00884b',
        main: '#38CB89',
      },
      text: {
        primary: '#000',
        secondary: '#6C7275',
      },
      warning: {
        main: '#FFAB00',
      },
    },
    shadows,
    transitions: {
      duration: {
        standard: 150,
      },
    },
    typography: palette => ({
      /**
       * Default
       */
      allVariants: {
        color: palette.grey['700'],
        fontFamily: interFontRegular.style.fontFamily,
      },
      body1: {
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '32px',
      },
      body1Bold: {
        fontFamily: interFontBold.style.fontFamily,
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '32px',
      },
      body1Semi: {
        fontFamily: interFontSemi.style.fontFamily,
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '32px',
      },
      body2: {
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '26px',
      },
      body2Bold: {
        fontFamily: interFontBold.style.fontFamily,
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '26px',
      },
      body2Semi: {
        fontFamily: interFontSemi.style.fontFamily,
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '26px',
      },
      button: {
        fontFamily: interFontMedium.style.fontFamily,
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '24px',
        textTransform: 'none',
      },
      caption: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '22px',
      },
      caption1: {
        fontFamily: interFontRegular.style.fontFamily,
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '22px',
      },
      caption1Bold: {
        fontFamily: interFontBold.style.fontFamily,
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '22px',
      },
      caption1Semi: {
        fontFamily: interFontSemi.style.fontFamily,
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '22px',
      },
      caption2: {
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '20px',
      },
      caption2Bold: {
        fontFamily: interFontBold.style.fontFamily,
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '20px',
      },
      caption2Semi: {
        fontFamily: interFontSemi.style.fontFamily,
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '20px',
      },
      captionBold: {
        fontFamily: interFontBold.style.fontFamily,
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '22px',
      },
      captionSemi: {
        fontFamily: interFontSemi.style.fontFamily,
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '22px',
      },
      /**
       * Headings
       */
      h1: {
        fontFamily: poppinsFont.style.fontFamily,
        fontSize: '80px',
        fontStyle: 'normal',
        fontWeight: 500,
        letterSpacing: '-3px',
        lineHeight: '84px',
      },
      h2: {
        fontFamily: poppinsFont.style.fontFamily,
        fontSize: '72px',
        fontStyle: 'normal',
        fontWeight: 500,
        letterSpacing: '-2px',
        lineHeight: '76px',
      },
      h3: {
        fontFamily: poppinsFont.style.fontFamily,
        fontSize: '54px',
        fontStyle: 'normal',
        fontWeight: 500,
        letterSpacing: '-1px',
        lineHeight: '58px',
      },
      h4: {
        fontFamily: poppinsFont.style.fontFamily,
        fontSize: '40px',
        fontStyle: 'normal',
        fontWeight: 500,
        letterSpacing: '-0.4px',
        lineHeight: '44px',
      },
      h5: {
        fontFamily: poppinsFont.style.fontFamily,
        fontSize: '34px',
        fontStyle: 'normal',
        fontWeight: '500',
        letterSpacing: '-0.6px',
        lineHeight: '38px',
      },
      h6: {
        fontFamily: poppinsFont.style.fontFamily,
        fontSize: '28px',
        fontStyle: 'normal',
        fontWeight: 500,
        letterSpacing: '-0.6px',
        lineHeight: '34px',
      },
      h7: {
        color: palette.grey['600'],
        fontFamily: poppinsFont.style.fontFamily,
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '28px',
      },
      hairline1: {
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '18px',
      },
      hairline1Bold: {
        fontFamily: interFontBold.style.fontFamily,
        fontSize: '18px',
        fontStyle: 'normal',
        lineHeight: '18px',
      },
      hairline1Semi: {
        fontFamily: interFontSemi.style.fontFamily,
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '18px',
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
      hairline2Semi: {
        fontFamily: interFontSemi.style.fontFamily,
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '18px',
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
      text1Bold: {
        fontFamily: interFontBold.style.fontFamily,
        fontSize: '26px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '40px',
      },
      text1Semi: {
        fontFamily: interFontSemi.style.fontFamily,
        fontSize: '26px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '40px',
      },
      text2: {
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '34px',
      },
      text2Bold: {
        fontFamily: interFontBold.style.fontFamily,
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '34px',
      },
      text2Semi: {
        fontFamily: interFontSemi.style.fontFamily,
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '34px',
      },
      text3: {
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '30px',
      },
      text3Bold: {
        fontFamily: interFontBold.style.fontFamily,
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '30px',
      },
      text3Semi: {
        fontFamily: interFontSemi.style.fontFamily,
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '30px',
      },
    }),
  })
