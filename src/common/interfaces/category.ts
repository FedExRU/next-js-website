import {
  IRequestAllContract,
  IRequestBaseContract,
  IResponseRowsContract,
} from './common'

export interface ICategoryContract {
  id: number
  name: string
}

export interface IRequestCategoriesContract
  extends IRequestAllContract,
    IRequestBaseContract<ICategoryContract> {}

export interface IResponseRowsCategoriesContract
  extends IResponseRowsContract<ICategoryContract> {}
