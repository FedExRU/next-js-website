import { HEADERS } from 'app/constants'
import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const origin = request.nextUrl.origin

  const response = NextResponse.next()
  response.headers.set(HEADERS.PATHNAME, pathname)
  response.headers.set(HEADERS.ORIGIN, origin)

  return response
}

export const config = {
  matcher: '/:path*',
}
