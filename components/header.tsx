'use client'

import Link from 'next/link'
import { useCart } from '@/app/context/cart-context'
import { ShoppingCart } from 'lucide-react'

export function Header() {
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Inventory<span className="text-primary">Hub</span>
          </h1>
        </div>
        
        <Link href="/cart" className="relative">
          <div className="relative p-2 hover:bg-accent rounded-lg transition-colors">
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
        </Link>
      </div>
    </header>
  )
}
