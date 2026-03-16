import { cn } from '@/lib/utils'

interface ProgressProps {
  value: number
  max?: number
  className?: string
  color?: 'primary' | 'emerald' | 'amber' | 'rose'
  showLabel?: boolean
}

export function Progress({
  value,
  max = 100,
  className,
  color = 'primary',
  showLabel = false,
}: ProgressProps) {
  const percentage = Math.min((value / max) * 100, 100)

  return (
    <div className={cn('w-full', className)}>
      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className={cn(
            'h-full rounded-full transition-all duration-300',
            color === 'primary' && 'bg-primary-500',
            color === 'emerald' && 'bg-emerald-500',
            color === 'amber' && 'bg-amber-500',
            color === 'rose' && 'bg-rose-500'
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="mt-1 text-xs text-slate-500 text-right">
          {value}/{max}
        </div>
      )}
    </div>
  )
}
