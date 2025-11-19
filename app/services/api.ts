const API_BASE_URL = typeof window !== 'undefined' ? '' : 'http://localhost:3000'

export const api = {
  async getProducts(params: {
    query?: string
    category?: string
    page?: number
    limit?: number
    sort?: string
  }) {
    const searchParams = new URLSearchParams()
    if (params.query) searchParams.append('query', params.query)
    if (params.category) searchParams.append('category', params.category)
    if (params.page) searchParams.append('page', params.page.toString())
    if (params.limit) searchParams.append('limit', params.limit.toString())
    if (params.sort) searchParams.append('sort', params.sort)

    const response = await fetch(`/api/products?${searchParams.toString()}`)
    if (!response.ok) throw new Error('Failed to fetch products')
    return response.json()
  },

  async getProduct(id: string) {
    const response = await fetch(`/api/products/${id}`)
    if (!response.ok) throw new Error('Failed to fetch product')
    return response.json()
  },
}
