export type UnknownCallback<T extends unknown[] = unknown[]> = (
  ...args: T
) => unknown
