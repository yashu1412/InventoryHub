'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/app/context/cart-context'
import { api } from '@/app/services/api'
import { Product } from '@/app/types/product'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, AlertCircle, Loader2, ShoppingCart } from 'lucide-react'

interface ProductDetailsPageProps {
  productId: string
}

export function ProductDetailsPage({ productId }: ProductDetailsPageProps) {
  const [product, setProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isAdded, setIsAdded] = useState(false)
  const { addToCart } = useCart()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await api.getProduct(productId)
        setProduct(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch product')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [productId])

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
      setIsAdded(true)
      setTimeout(() => setIsAdded(false), 2000)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <Loader2 className="w-12 h-12 text-primary mx-auto mb-4 animate-spin" />
          <p className="text-muted-foreground">Loading product details...</p>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center animate-fade-in-up max-w-md">
          <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Product not found</h1>
          <p className="text-muted-foreground mb-6">{error || 'The product you are looking for does not exist.'}</p>
          <Link href="/products">
            <Button style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }} className="hover:scale-105">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const stockStatus = product.stock > 0 ? 'In Stock' : 'Out of Stock'
  const stockColor = product.stock > 0 ? 'bg-accent text-accent-foreground' : 'bg-destructive text-destructive-foreground'

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="sticky top-0 z-40 bg-gradient-to-b from-background via-background to-transparent backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/products">
            <Button variant="ghost" size="sm" style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }} className="hover:scale-105">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
      </header>

      {/* Product Details */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 animate-fade-in-up">
          {/* Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div>
              <Badge className="mb-3 text-xs">{product.category}</Badge>
              <h1 className="text-4xl font-bold text-foreground mb-3">{product.name}</h1>
              <div className="flex items-center gap-4 text-lg">
                <span className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <span className="font-semibold">{product.rating.toFixed(1)}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Stock Status */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Availability</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Stock:</span>
                  <span className="font-semibold">{product.stock} units</span>
                </div>
                <Badge className={`${stockColor} text-base py-2 px-3`}>{stockStatus}</Badge>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-6">
              <Button
                size="lg"
                className="flex-1 hover:scale-105"
                disabled={product.stock === 0}
                onClick={handleAddToCart}
                style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: isAdded ? '0 10px 25px -5px rgb(229, 9, 20, 0.5)' : 'none' }}
                onMouseEnter={(e) => { if (!isAdded) e.currentTarget.style.boxShadow = '0 10px 25px -5px rgb(229, 9, 20, 0.5)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {isAdded ? 'Added to Cart!' : 'Add to Cart'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 hover:scale-105"
                style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
              >
                Save for Later
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
