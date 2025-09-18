export const toDecimalString = (value: null | number | string | undefined) => {
  if (!value) {
    return ''
  }

  return (
    typeof value === 'number' ? value : parseFloat(value as string)
  ).toFixed(2)
}
