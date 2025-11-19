'use client'

import Link from 'next/link'
import { useCart } from '@/app/context/cart-context'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Trash2, Plus, Minus } from 'lucide-react'

export function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-8 hover:scale-105" style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shopping
            </Button>
          </Link>

          <div className="text-center py-16 animate-fade-in-up">
            <div className="text-6xl mb-4">🛒</div>
            <h1 className="text-3xl font-bold mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Start shopping to add items to your cart
            </p>
            <Link href="/">
              <Button size="lg" className="hover:scale-105" style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in-up">
          <div>
            <Link href="/">
              <Button variant="ghost" size="sm" className="mb-4 hover:scale-105" style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Shopping
              </Button>
            </Link>
            <h1 className="text-4xl font-bold">Shopping Cart</h1>
            <p className="text-muted-foreground mt-1">{items.length} item{items.length !== 1 ? 's' : ''} in cart</p>
          </div>
          <Button
            variant="outline"
            onClick={clearCart}
            className="hover:scale-105"
            style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
          >
            Clear Cart
          </Button>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 mb-8">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 bg-muted/50 rounded-lg border border-border hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms`, transition: 'border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              {/* Product Image */}
              <div className="w-24 h-24 rounded-lg overflow-hidden bg-background flex-shrink-0">
                <img
                  src={item.image || '/placeholder.svg'}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{item.name}</h3>
                  <p className="text-primary font-bold mt-1">${item.price.toFixed(2)}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon-sm"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="hover:scale-105"
                    style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="font-semibold min-w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon-sm"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="hover:scale-105"
                    style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                  <Badge variant="secondary" className="ml-auto">
                    ${(item.price * item.quantity).toFixed(2)}
                  </Badge>
                </div>
              </div>

              {/* Remove Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeFromCart(item.id)}
                className="text-destructive hover:bg-destructive/10 hover:scale-105"
                style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-muted/50 rounded-lg border border-border p-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-muted-foreground">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t border-border pt-3 flex items-center justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-primary">${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>
          <Link href="/checkout">
            <Button size="lg" className="w-full hover:scale-105" style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
