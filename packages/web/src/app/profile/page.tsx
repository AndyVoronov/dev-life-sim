'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { useGameStore } from '@/stores/gameStore'

export default function ProfilePage() {
  const { player, skills } = useGameStore()

  if (!player) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 pb-20">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-3xl">
              👤
            </div>
            <div>
              <h1 className="text-2xl font-bold">{player.displayName}</h1>
              <p className="text-slate-400">@{player.username}</p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-sm">⭐ Level {player.level}</span>
                <span className="text-sm">💰 ${player.money.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <main className="container mx-auto px-4 py-8">
        <Card className="mb-6">
          <CardHeader>
            <h2 className="text-lg font-semibold">📊 Stats</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-slate-400">Experience</p>
                <p className="text-2xl font-bold">{player.experience.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Reputation</p>
                <p className="text-2xl font-bold">{player.reputation}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Level</p>
                <p className="text-2xl font-bold">{player.level}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Money</p>
                <p className="text-2xl font-bold">${player.money.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold">🎯 Skills</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.id}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-slate-400">Level {skill.level}</span>
                </div>
                <Progress
                  value={skill.experience}
                  max={skill.maxExperience}
                  showLabel
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
