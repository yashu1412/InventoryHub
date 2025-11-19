'use client'

import { useProducts } from '@/app/hooks/use-products'
import { ProductCard } from '@/components/product-card'
import { SearchBar } from '@/components/search-bar'
import { FilterSelect } from '@/components/filter-select'
import { SortSelect } from '@/components/sort-select'
import { Pagination } from '@/components/pagination'
import { LoadingSkeleton } from '@/components/ui/loading-skeleton'
import { Button } from '@/components/ui/button'
import { AlertCircle, RotateCcw } from 'lucide-react'

export function ProductsPage() {
  const {
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
  } = useProducts()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-gradient-to-b from-background via-background to-transparent backdrop-blur border-b border-border animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground">
                Listings <span className="text-primary">Manager</span>
              </h1>
              <p className="text-muted-foreground mt-1">Admin Product Dashboard</p>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
            <div className="md:col-span-5">
              <SearchBar value={query} onChange={setQuery} />
            </div>
            <div className="md:col-span-3">
              <FilterSelect value={category} onChange={setCategory} />
            </div>
            <div className="md:col-span-3">
              <SortSelect value={sort} onChange={setSort} />
            </div>
            <div className="md:col-span-1">
              <Button
                onClick={handleReset}
                variant="outline"
                size="icon"
                className="w-full hover:scale-105"
                style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
                aria-label="Reset filters"
                title="Reset all filters"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-8 p-4 bg-destructive/10 border border-destructive rounded-lg flex items-start gap-3 animate-scale-in">
            <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-destructive">Error loading products</h3>
              <p className="text-sm text-muted-foreground mt-1">{error}</p>
              <Button
                onClick={() => window.location.reload()}
                variant="outline"
                size="sm"
                className="mt-3"
              >
                Try Again
              </Button>
            </div>
          </div>
        )}

        {isLoading && <LoadingSkeleton count={9} />}

        {!isLoading && products.length === 0 && !error && (
          <div className="text-center py-16 animate-fade-in-up">
            <div className="text-5xl mb-4">📭</div>
            <h2 className="text-xl font-semibold mb-2">No products found</h2>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filters
            </p>
            <Button onClick={handleReset} variant="default">
              Reset Filters
            </Button>
          </div>
        )}

        {!isLoading && products.length > 0 && (
          <>
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{products.length}</span> products
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
            {totalPages > 1 && (
              <Pagination
                page={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            )}
          </>
        )}
      </main>
    </div>
  )
}
