'use server'

import { RequestResult } from '../lib'
import data from './data'

export const query = async <T>(key: string): Promise<RequestResult<T>> => {
  const items = data[key as keyof typeof data] as unknown as T[]

  return Promise.resolve({ count: items.length, items })
}
