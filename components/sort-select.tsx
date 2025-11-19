'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SortOption } from '@/app/types/product'

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'name-asc', label: 'Name (A-Z)' },
  { value: 'name-desc', label: 'Name (Z-A)' },
  { value: 'price-asc', label: 'Price (Low to High)' },
  { value: 'price-desc', label: 'Price (High to Low)' },
]

interface SortSelectProps {
  value: SortOption
  onChange: (value: SortOption) => void
}

export function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="bg-secondary border-muted animate-slide-in-right" style={{ animationDelay: '150ms', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 25px -5px rgb(229, 9, 20, 0.5)' }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}>
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent className="bg-secondary border-muted">
        {SORT_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
