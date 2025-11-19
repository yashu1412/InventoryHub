'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FeaturedProducts } from './featured-products'
import { Footer } from './footer'

export function IntroPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background overflow-hidden flex flex-col">
      {/* Animated background grid */}
      <div className="fixed inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(229, 9, 20, 0.05) 25%, rgba(229, 9, 20, 0.05) 26%, transparent 27%, transparent 74%, rgba(229, 9, 20, 0.05) 75%, rgba(229, 9, 20, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(229, 9, 20, 0.05) 25%, rgba(229, 9, 20, 0.05) 26%, transparent 27%, transparent 74%, rgba(229, 9, 20, 0.05) 75%, rgba(229, 9, 20, 0.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Top bar accent */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent z-40" />

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Logo/Title */}
            <div 
              className="mb-8 inline-block"
              style={{
                animation: isVisible ? 'fadeInDown 0.8s ease-out' : 'none',
                opacity: isVisible ? 1 : 0,
              }}
            >
              <div className="text-sm font-semibold text-primary mb-4 tracking-widest uppercase">
                Welcome to InventoryHub
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight mb-6">
                Manage Your
                <span className="bg-gradient-to-r from-primary via-primary to-red-600 text-transparent bg-clip-text"> Inventory </span>
                Like Never Before
              </h1>
            </div>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
              style={{
                animation: isVisible ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none',
              }}
            >
              Experience the power of Netflix-inspired design with seamless inventory management. Browse products, manage inventory, and track your business growth all in one elegant platform.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              style={{
                animation: isVisible ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none',
              }}
            >
              <Link 
                href="/products"
                className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden flex items-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                <span>Explore Products</span>
                <span>→</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              <Link 
                href="#features"
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Powerful Features
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Built for modern inventory management with Netflix-inspired aesthetics
            </p>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '📦',
                  title: 'Smart Inventory',
                  description: 'Real-time product tracking and management with advanced filtering capabilities'
                },
                {
                  icon: '⚡',
                  title: 'Lightning Fast',
                  description: 'Optimized performance with smooth animations and instant loading'
                },
                {
                  icon: '🛡️',
                  title: 'Secure & Reliable',
                  description: 'Enterprise-grade security with seamless checkout experience'
                }
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-lg border border-border hover:border-primary bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  style={{
                    animation: isVisible ? `fadeInUp 0.8s ease-out ${0.6 + idx * 0.1}s both` : 'none',
                  }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="relative py-24 px-4 bg-gradient-to-b from-background via-background/50 to-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Featured Products
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Check out our latest inventory updates - refreshed every 2 minutes
            </p>
            <FeaturedProducts />
          </div>
        </section>

        {/* CTA Section with Typing Animation */}
        <section className="relative py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              <TypingAnimation text="Ready to manage your inventory?" speed={50} />
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Join thousands of businesses using InventoryHub to streamline their inventory management.
            </p>
            <Link 
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group"
            >
              Start Shopping Now
              <span>→</span>
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}

function TypingAnimation({ text, speed = 50 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, speed)

    return () => clearInterval(typeInterval)
  }, [text, speed])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span>
      {displayedText}
      <span className={`inline-block w-0.5 h-12 ml-1 bg-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
    </span>
  )
}
