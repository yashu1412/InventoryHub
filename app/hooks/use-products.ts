'use client'

import { useCallback, useState, useEffect } from 'react'
import { Product, ProductsResponse, SortOption } from '@/app/types/product'
import { api } from '@/app/services/api'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState<SortOption>('name-asc')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [debouncedQuery, setDebouncedQuery] = useState('')

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
      setPage(1)
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const data: ProductsResponse = await api.getProducts({
          query: debouncedQuery,
          category: category === 'all' ? '' : category,
          page,
          limit: 10,
          sort,
        })
        setProducts(data.products)
        setTotalPages(Math.ceil(data.total / 10))
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [debouncedQuery, category, sort, page])

  const handleReset = useCallback(() => {
    setQuery('')
    setCategory('all')
    setSort('name-asc')
    setPage(1)
  }, [])

  return {
    products,
    isLoading,
    error,
    query,
    setQuery,
    category,
    setCategory,
    sort,
    setSort,
    page,
    setPage,
    totalPages,
    handleReset,
  }
}
