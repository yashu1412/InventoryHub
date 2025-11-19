'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/app/types/product'
import { api } from '@/app/services/api'

export function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchFeaturedProducts = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await api.getProducts({ limit: 3, sort: 'name-asc' })
      setProducts(Array.isArray(data.products) ? data.products : [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load products')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFeaturedProducts()
    const interval = setInterval(fetchFeaturedProducts, 120000)
    return () => clearInterval(interval)
  }, [])

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-destructive mb-4">{error}</p>
        <button
          onClick={fetchFeaturedProducts}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="w-full h-48 bg-muted rounded-lg mb-4" />
              <div className="h-4 bg-muted rounded mb-2" />
              <div className="h-4 bg-muted rounded w-2/3" />
            </div>
          ))
        ) : products.length === 0 ? (
          <div className="col-span-full text-center py-12 text-muted-foreground">
            No featured products available
          </div>
        ) : (
          products.map((product, idx) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group featured-product-item"
              data-index={idx}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-square bg-card border border-border hover:border-primary transition-all duration-300">
                <div className="relative w-full h-full">
                  <Image
                    src={product.image || '/placeholder.svg?height=300&width=300&query=product'}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                  New
                </div>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">${product.price}</span>
                <span className="text-sm text-muted-foreground">⭐ {product.rating}</span>
              </div>
            </Link>
          ))
        )}
      </div>

      <style jsx>{`
        .featured-product-item {
          animation: fadeInUp 0.6s ease-out both;
        }
        .featured-product-item[data-index="0"] {
          animation-delay: 0.2s;
        }
        .featured-product-item[data-index="1"] {
          animation-delay: 0.3s;
        }
        .featured-product-item[data-index="2"] {
          animation-delay: 0.4s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
