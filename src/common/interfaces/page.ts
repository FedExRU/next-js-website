import { IBaseResponseContract } from './common'

export interface IEntityPageResponseContract
  extends IBaseResponseContract<IPageContract> {}

export interface IPageContract {
  code: string
  description: null | string
  id: number
  metaDescription: null | string
  metaKeywords: null | string
  metaTitle: null | string
  name: string
  parent: IPageContract | null
  path: string
  shortName: null | string
}
