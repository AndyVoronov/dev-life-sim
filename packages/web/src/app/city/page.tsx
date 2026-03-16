'use client'

import { Card } from '@/components/ui/Card'
import { useGameStore } from '@/stores/gameStore'

const buildings = [
  { id: 1, name: 'Tech Hub', icon: '🏢', type: 'office', description: 'Work on projects' },
  { id: 2, name: 'Coffee Shop', icon: '☕', type: 'cafe', description: 'Network & relax' },
  { id: 3, name: 'Startup Incubator', icon: '🚀', type: 'incubator', description: 'Find investors' },
  { id: 4, name: 'University', icon: '🎓', type: 'education', description: 'Learn skills' },
  { id: 5, name: 'Bank', icon: '🏦', type: 'bank', description: 'Manage finances' },
  { id: 6, name: 'Job Center', icon: '📋', type: 'jobs', description: 'Find work' },
  { id: 7, name: 'Coworking', icon: '👥', type: 'coworking', description: 'Meet people' },
  { id: 8, name: 'Tech Store', icon: '💻', type: 'shop', description: 'Buy equipment' },
]

export default function CityPage() {
  const { player } = useGameStore()

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 pb-20">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">🏙️ City</h1>
          <p className="text-sm text-slate-400">Explore and interact</p>
        </div>
      </header>

      {/* City Map */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {buildings.map((building) => (
            <Card
              key={building.id}
              className="p-4 text-center hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="text-4xl mb-2">{building.icon}</div>
              <h3 className="font-medium text-sm">{building.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{building.description}</p>
            </Card>
          ))}
        </div>

        {/* Player Location */}
        <Card className="mt-8 p-6">
          <h2 className="font-semibold mb-2">📍 Your Location</h2>
          <p className="text-sm text-slate-400">
            You are standing in the city center. Other players nearby: 12
          </p>
        </Card>
      </main>
    </div>
  )
}
