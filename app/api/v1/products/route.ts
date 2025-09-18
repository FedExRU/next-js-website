import { getNewArrivals } from '@backend/app'

export async function GET() {
  return new Response(JSON.stringify(getNewArrivals()), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  })
}
