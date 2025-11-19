'use client'

import Link from 'next/link'
import { Product } from '@/app/types/product'
import { Badge } from '@/components/ui/badge'
import { useCart } from '@/app/context/cart-context'
import { ShoppingCart } from 'lucide-react'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const stockStatus = product.stock > 0 ? 'In Stock' : 'Out of Stock'
  const stockColor = product.stock > 0 ? 'bg-accent text-accent-foreground' : 'bg-destructive text-destructive-foreground'
  const { addToCart } = useCart()
  const [showAddedConfirm, setShowAddedConfirm] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
    setShowAddedConfirm(true)
    setTimeout(() => setShowAddedConfirm(false), 2000)
  }

  return (
    <Link href={`/products/${product.id}`}>
      <div
        className="group animate-fade-in-up cursor-pointer hover:scale-105"
        style={{ animationDelay: `${index * 50}ms`, transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted mb-6">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110"
            style={{ transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex flex-col items-end justify-end gap-4 p-5" style={{ transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <button 
              onClick={handleAddToCart}
              className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold hover:bg-primary/90 flex items-center justify-center gap-3 text-lg"
              style={{ transition: 'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              <ShoppingCart className="w-6 h-6" />
              {showAddedConfirm ? 'Added!' : 'Add to Cart'}
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault()
              }}
              className="w-full bg-secondary text-secondary-foreground py-4 rounded-xl font-semibold hover:bg-secondary/90 text-lg"
              style={{ transition: 'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              View Details
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary" style={{ transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            {product.name}
          </h3>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            <Badge variant="outline" className="text-base px-4 py-1.5">
              {product.category}
            </Badge>
          </div>

          <div className="flex items-center justify-between text-base">
            <span className="text-muted-foreground">⭐ {product.rating.toFixed(1)}</span>
            <Badge className={`${stockColor} text-base px-4 py-1.5`}>{stockStatus}</Badge>
          </div>
        </div>
      </div>
    </Link>
  )
}
