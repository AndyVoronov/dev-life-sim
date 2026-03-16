'use client'

import { useState } from 'react'
import { 
  BuildingOfficeIcon, 
  BriefcaseIcon, 
  ChartBarIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'

const menuItems = [
  { icon: BuildingOfficeIcon, label: 'Company', value: '$50K/mo', color: 'bg-primary-500' },
  { icon: BriefcaseIcon, label: 'Career', value: 'Senior', color: 'bg-emerald-500' },
  { icon: ChartBarIcon, label: 'Market', value: '#12', color: 'bg-amber-500' },
  { icon: UserGroupIcon, label: 'Network', value: '247', color: 'bg-rose-500' },
  { icon: AcademicCapIcon, label: 'Skills', value: '12/20', color: 'bg-violet-500' },
  { icon: HomeIcon, label: 'Home', value: 'Upgrade', color: 'bg-cyan-500' },
]

const news = [
  'TechCorp acquired by GiantCo for $2.3B',
  'New AI regulation announced in EU',
  'Startup XYZ raises Series A',
]

export default function HomePage() {
  const [player] = useState({
    name: 'Player Name',
    level: 42,
    money: 1234567,
  })

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700" />
            <div>
              <h1 className="font-semibold">{player.name}</h1>
              <p className="text-sm text-slate-400">Level {player.level} | ${player.money.toLocaleString()}</p>
            </div>
          </div>
          <button className="p-2 hover:bg-slate-800 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Menu Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="card p-6 hover:scale-105 transition-transform text-left group"
            >
              <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{item.label}</h3>
              <p className="text-sm text-slate-400">{item.value}</p>
            </button>
          ))}
        </div>

        {/* News Feed */}
        <div className="card p-6">
          <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <span>📰</span> News
          </h2>
          <div className="space-y-3">
            {news.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 safe-area-inset-bottom">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            <button className="flex flex-col items-center gap-1 text-primary-500">
              <HomeIcon className="w-6 h-6" />
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-300">
              <BuildingOfficeIcon className="w-6 h-6" />
              <span className="text-xs">City</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-300">
              <BriefcaseIcon className="w-6 h-6" />
              <span className="text-xs">Work</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-300">
              <ChartBarIcon className="w-6 h-6" />
              <span className="text-xs">Stats</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-300">
              <UserGroupIcon className="w-6 h-6" />
              <span className="text-xs">Social</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
