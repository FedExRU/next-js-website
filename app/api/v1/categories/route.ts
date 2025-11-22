import { getCategories } from '@backend/app'
import { IRequestCategoriesContract } from '@common/interfaces'
import { NextRequest } from 'next/server'

import { STATUS_CODES } from '../constants'
import { buildResponse } from '../utils'

export async function GET(request: NextRequest) {
  const filters: IRequestCategoriesContract = Object.fromEntries(
    request.nextUrl.searchParams,
  )

  try {
    const data = await getCategories(filters)
    return buildResponse({ data })
  } catch (error) {
    return buildResponse({
      code: (error as NodeJS.ErrnoException).code,
      status: STATUS_CODES.INTERNAL_SERVER_ERROR,
    })
  }
}
