export function LoadingSkeleton({ count = 10 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="space-y-4 animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
          <div className="aspect-video bg-muted rounded-lg animate-shimmer" />
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded animate-shimmer" />
            <div className="h-3 bg-muted rounded w-2/3 animate-shimmer" />
            <div className="h-3 bg-muted rounded w-1/2 animate-shimmer" />
          </div>
        </div>
      ))}
    </div>
  )
}
