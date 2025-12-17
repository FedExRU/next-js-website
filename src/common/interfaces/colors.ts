import { IRequestBaseContract, IResponseRowsContract } from './common'

export interface IColorContract {
  id: number
  name: string
  value: string
}

export interface IRequestColorsContract
  extends IRequestBaseContract<IColorContract> {}

export interface IResponseRowsColorsContract
  extends IResponseRowsContract<IColorContract> {}
