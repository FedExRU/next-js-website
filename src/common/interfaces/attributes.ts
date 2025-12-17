import {
  IRequestBaseContract,
  IResponseMapContract,
  IResponseRowsContract,
} from './common'

export type AttributeType = 'DICTIONARY' | 'NUMBER' | 'STRING'

export interface IAttributeContract {
  attributeType: AttributeType
  code: string
  id: number
  name: string
}

export interface IAttributeDictionaryValueContract {
  [attributeId: string]: {
    id: number
    value: string
  }[]
}

export interface IRequestAttributesContract
  extends IRequestBaseContract<IAttributeContract> {}

export interface IResponseMapAttributeDictionaryValuesContract
  extends IResponseMapContract<IAttributeDictionaryValueContract> {}

export interface IResponseRowsAttributeContract
  extends IResponseRowsContract<IAttributeContract> {}
