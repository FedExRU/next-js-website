import { DIRECTION_ORDER } from '../constants'

export type DirectionOrderContract =
  (typeof DIRECTION_ORDER)[keyof typeof DIRECTION_ORDER]

export interface IBaseResponseContract<T> {
  code: string
  data: T
  message: string
  status: number
}

export interface IRequestAllContract {
  all?: boolean
}

export interface IRequestBaseContract<T> {
  limit?: number
  offset?: number
  orderBy?: OrderByContract<T>
}

export interface IResponseMapContract<T extends Record<string, unknown>>
  extends IBaseResponseContract<IResultMapContract<T>> {}

export interface IResponseRowsContract<T>
  extends IBaseResponseContract<IResultRowsContract<T>> {}

export interface IResultMapContract<T extends Record<string, unknown>> {
  map: T
}

export interface IResultRowsContract<T> {
  rows: T[]
  total: number
}

export interface OrderByContract<T = Record<string, unknown>> {
  direction: DirectionOrderContract
  field: keyof T
}
