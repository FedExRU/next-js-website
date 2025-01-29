export const macroTask = (callback: () => void) => {
  setTimeout(callback, 1)
}
