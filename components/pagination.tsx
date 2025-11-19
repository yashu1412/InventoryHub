'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2 mt-12 animate-fade-in-up">
      <Button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        variant="outline"
        size="icon"
        style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
        className="hover:scale-105"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }).map((_, i) => {
          const pageNum = i + 1
          const isNear = Math.abs(pageNum - page) <= 1
          const isEllipsis = !isNear && pageNum !== 1 && pageNum !== totalPages

          if (isEllipsis && pageNum !== totalPages - 1) {
            return null
          }

          return (
            <Button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              variant={pageNum === page ? 'default' : 'outline'}
              size="sm"
              style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
              className="hover:scale-105 min-w-10"
              aria-label={`Go to page ${pageNum}`}
              aria-current={pageNum === page ? 'page' : undefined}
            >
              {pageNum}
            </Button>
          )
        })}
      </div>

      <Button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        variant="outline"
        size="icon"
        style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
        className="hover:scale-105"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  )
}
