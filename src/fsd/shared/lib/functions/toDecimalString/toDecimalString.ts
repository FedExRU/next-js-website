export const toDecimalString = (value: number | string | null | undefined) =>
  value
    ? (typeof value === 'number' ? value : parseFloat(value as string)).toFixed(
        2,
      )
    : ''
