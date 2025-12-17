export const STATUS_CODES = {
  BAD_REQUEST: 400,
  CONFLICT: 409,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
  NOT_FOUND: 404,
  NOT_IMPLEMENTED: 501,
  OK: 200,
  SERVICE_UNAVAILABLE: 503,
  UNAUTHORIZED: 401,
} as const

export const BASE_HEADERS = {
  'Content-Type': 'application/json',
} as const
