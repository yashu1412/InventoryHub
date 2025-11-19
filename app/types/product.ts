export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  stock: number
  image: string
  rating: number
  reviews: number
}

export type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc'

export interface ProductsResponse {
  products: Product[]
  total: number
  page: number
  limit: number
}
