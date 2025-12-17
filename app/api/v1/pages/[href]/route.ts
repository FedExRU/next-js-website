import { getPageByHref } from '@backend/app'
import { NextRequest } from 'next/server'

import { STATUS_CODES } from '../../constants'
import { buildResponse } from '../../utils'
import { PagesRouteParameters } from './types'

export async function GET(_: NextRequest, { params }: PagesRouteParameters) {
  const href = (await Promise.resolve(params)).href

  try {
    const data = await getPageByHref(href)
    return buildResponse({ data })
  } catch (error) {
    return buildResponse({
      code: (error as NodeJS.ErrnoException).code,
      message: (error as NodeJS.ErrnoException).message,
      status: STATUS_CODES.INTERNAL_SERVER_ERROR,
    })
  }
}
