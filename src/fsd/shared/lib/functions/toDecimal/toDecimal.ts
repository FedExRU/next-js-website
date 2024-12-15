export const toDecimal = (value: number | string | null | undefined) =>
  (typeof value === 'number' ? value : parseFloat(value || '0')).toFixed(2)
