import { BASE_HEADERS, STATUS_CODES } from './constants'

export function buildResponse<T = Record<string, unknown>>({
  code = 'OK',
  data,
  headers = BASE_HEADERS,
  message = '',
  status = STATUS_CODES.OK,
}: {
  code?: string
  data?: T
  headers?: HeadersInit
  message?: string
  status?: (typeof STATUS_CODES)[keyof typeof STATUS_CODES]
}) {
  return new Response(
    JSON.stringify({
      code,
      data,
      message,
      status,
    }),
    {
      headers,
      status,
    },
  )
}
