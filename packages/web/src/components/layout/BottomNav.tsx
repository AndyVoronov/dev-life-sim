'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  HomeIcon, 
  BuildingOfficeIcon, 
  BriefcaseIcon,
  ChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

const navItems = [
  { icon: HomeIcon, label: 'Home', href: '/' },
  { icon: BuildingOfficeIcon, label: 'City', href: '/city' },
  { icon: BriefcaseIcon, label: 'Work', href: '/work' },
  { icon: ChartBarIcon, label: 'Skills', href: '/skills' },
  { icon: UserGroupIcon, label: 'Social', href: '/social' },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex flex-col items-center gap-1 py-1 px-3 rounded-lg transition-colors',
                  isActive
                    ? 'text-primary-500'
                    : 'text-slate-400 hover:text-slate-300'
                )}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xs">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
