'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-card/50 border-t border-border mt-12">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">InventoryHub</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We offer a wide variety of products across multiple categories, bringing you high-quality items with exceptional customer service.
            </p>
            <div className="flex gap-2">
              <a href="#" className="p-2 hover:bg-primary/10 rounded transition-colors" title="Facebook">
                f
              </a>
              <a href="#" className="p-2 hover:bg-primary/10 rounded transition-colors" title="Twitter">
                𝕏
              </a>
              <a href="#" className="p-2 hover:bg-primary/10 rounded transition-colors" title="Instagram">
                📷
              </a>
              <a href="#" className="p-2 hover:bg-primary/10 rounded transition-colors" title="LinkedIn">
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  Fashion
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  Home & Garden
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  Sports
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  Toys
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Sign up for our newsletter to get the latest news and special offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="w-full px-3 py-2 bg-primary text-primary-foreground font-semibold rounded text-sm hover:bg-primary/90 transition-colors"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Payment Methods */}
          <div className="flex gap-4 mb-6">
            <div className="px-3 py-1.5 bg-background border border-border rounded text-xs font-semibold flex items-center gap-1">
              💳 Visa
            </div>
            <div className="px-3 py-1.5 bg-background border border-border rounded text-xs font-semibold flex items-center gap-1">
              💳 Mastercard
            </div>
            <div className="px-3 py-1.5 bg-background border border-border rounded text-xs font-semibold flex items-center gap-1">
              💳 PayPal
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2025 InventoryHub. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
