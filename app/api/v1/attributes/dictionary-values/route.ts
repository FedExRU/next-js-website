import { getAttributeDictionaryValues } from '@backend/app'

import { STATUS_CODES } from '../../constants'
import { buildResponse } from '../../utils'

export async function GET() {
  try {
    const data = await getAttributeDictionaryValues()
    return buildResponse({ data })
  } catch (error) {
    return buildResponse({
      code: (error as NodeJS.ErrnoException).code,
      status: STATUS_CODES.INTERNAL_SERVER_ERROR,
    })
  }
}
