export const toDecimalString = (value: null | number | string | undefined) =>
  value
    ? (typeof value === 'number' ? value : parseFloat(value as string)).toFixed(
        2,
      )
    : ''
