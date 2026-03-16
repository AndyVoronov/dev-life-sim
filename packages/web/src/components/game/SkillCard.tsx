import { Card } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { cn } from '@/lib/utils'

interface SkillCardProps {
  name: string
  level: number
  experience: number
  maxExperience: number
  icon?: string
  color?: 'primary' | 'emerald' | 'amber' | 'rose' | 'violet'
  className?: string
}

export function SkillCard({
  name,
  level,
  experience,
  maxExperience,
  icon = '⚡',
  color = 'primary',
  className,
}: SkillCardProps) {
  return (
    <Card className={cn('p-4', className)}>
      <div className="flex items-start gap-3">
        <div
          className={cn(
            'w-10 h-10 rounded-lg flex items-center justify-center text-xl',
            color === 'primary' && 'bg-primary-100 dark:bg-primary-900/30',
            color === 'emerald' && 'bg-emerald-100 dark:bg-emerald-900/30',
            color === 'amber' && 'bg-amber-100 dark:bg-amber-900/30',
            color === 'rose' && 'bg-rose-100 dark:bg-rose-900/30',
            color === 'violet' && 'bg-violet-100 dark:bg-violet-900/30'
          )}
        >
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-medium text-sm">{name}</h3>
            <span className="text-xs text-slate-500">Lv.{level}</span>
          </div>
          <Progress value={experience} max={maxExperience} color={color} />
          <div className="mt-1 text-xs text-slate-500 text-right">
            {experience}/{maxExperience} XP
          </div>
        </div>
      </div>
    </Card>
  )
}
