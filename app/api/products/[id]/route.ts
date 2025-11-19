import { mockProducts } from '@/mocks/data'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const product = mockProducts.find((p) => p.id === id)

  if (!product) {
    return Response.json({ error: 'Product not found' }, { status: 404 })
  }

  return Response.json(product)
}
