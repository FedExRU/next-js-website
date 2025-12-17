import { getAttributes } from '@backend/app'
import { IRequestAttributesContract } from '@common/interfaces'
import { NextRequest } from 'next/server'

import { STATUS_CODES } from '../constants'
import { buildResponse } from '../utils'

export async function GET(request: NextRequest) {
  const filters: IRequestAttributesContract = Object.fromEntries(
    request.nextUrl.searchParams,
  )

  try {
    const data = await getAttributes(filters)
    return buildResponse({ data })
  } catch (error) {
    return buildResponse({
      code: (error as NodeJS.ErrnoException).code,
      status: STATUS_CODES.INTERNAL_SERVER_ERROR,
    })
  }
}
