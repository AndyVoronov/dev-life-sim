'use client'

import { SkillCard } from '@/components/game/SkillCard'
import { useGameStore } from '@/stores/gameStore'

const skillIcons: Record<string, string> = {
  frontend: '🎨',
  backend: '⚙️',
  devops: '🚀',
  mobile: '📱',
  ai: '🤖',
}

const skillColors: Record<string, 'primary' | 'emerald' | 'amber' | 'rose' | 'violet'> = {
  frontend: 'primary',
  backend: 'emerald',
  devops: 'amber',
  mobile: 'rose',
  ai: 'violet',
}

export default function SkillsPage() {
  const { skills, player, updateSkill, addExperience } = useGameStore()

  const handlePractice = (skillId: string) => {
    updateSkill(skillId, 10)
    addExperience(5)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 pb-20">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">🎓 Skills</h1>
          <p className="text-sm text-slate-400">
            Level {player?.level} • {player?.experience} XP
          </p>
        </div>
      </header>

      {/* Skills Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.id} className="space-y-2">
              <SkillCard
                name={skill.name}
                level={skill.level}
                experience={skill.experience}
                maxExperience={skill.maxExperience}
                icon={skillIcons[skill.id]}
                color={skillColors[skill.id]}
              />
              <button
                onClick={() => handlePractice(skill.id)}
                className="w-full py-2 text-sm bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Practice (+10 XP)
              </button>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-8 p-6 bg-slate-800 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">📊 Stats</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-slate-400">Total Level:</span>
              <span className="ml-2 font-medium">
                {skills.reduce((sum, s) => sum + s.level, 0)}
              </span>
            </div>
            <div>
              <span className="text-slate-400">Money:</span>
              <span className="ml-2 font-medium">${player?.money.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
