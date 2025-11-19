import { mockProducts } from '@/mocks/data'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')?.toLowerCase() || ''
  const category = searchParams.get('category')?.toLowerCase() || ''
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
  const sort = searchParams.get('sort') || 'name-asc'

  let filtered = mockProducts

  // Apply filters
  if (query) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    )
  }

  if (category) {
    filtered = filtered.filter((p) => p.category.toLowerCase() === category)
  }

  // Apply sorting
  if (sort === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sort === 'name-desc') {
    filtered.sort((a, b) => b.name.localeCompare(a.name))
  } else if (sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price)
  } else if (sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price)
  }

  // Apply pagination
  const withImages = filtered.filter((p) => p.image && p.image.length > 0)
  const total = withImages.length
  const start = (page - 1) * limit
  const products = withImages.slice(start, start + limit)

  return Response.json({
    products,
    total,
    page,
    limit,
  })
}
