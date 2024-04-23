export const extractNumbersFromString = (str: string): number =>
  parseFloat(str.replace(/^\D+/g, ''))
