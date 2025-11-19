'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const CATEGORIES = [
  'All Categories',
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Sports',
  'Books',
  'Health & Beauty',
]

interface FilterSelectProps {
  value: string
  onChange: (value: string) => void
}

export function FilterSelect({ value, onChange }: FilterSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="bg-secondary border-muted animate-slide-in-left" style={{ animationDelay: '100ms', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 25px -5px rgb(229, 9, 20, 0.5)' }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}>
        <SelectValue placeholder="Filter by category" />
      </SelectTrigger>
      <SelectContent className="bg-secondary border-muted">
        {CATEGORIES.map((cat) => (
          <SelectItem key={cat} value={cat === 'All Categories' ? 'all' : cat.toLowerCase()}>
            {cat}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
