'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { useGameStore } from '@/stores/gameStore'

const tasks = [
  { id: 1, name: 'Fix Bug #1234', xp: 50, money: 100, difficulty: 'Easy' },
  { id: 2, name: 'Implement Feature X', xp: 100, money: 250, difficulty: 'Medium' },
  { id: 3, name: 'Code Review', xp: 30, money: 50, difficulty: 'Easy' },
  { id: 4, name: 'Refactor Module', xp: 150, money: 400, difficulty: 'Hard' },
]

export default function WorkPage() {
  const { player, updateMoney, addExperience, updateSkill } = useGameStore()
  const [currentTask, setCurrentTask] = useState<typeof tasks[0] | null>(null)
  const [progress, setProgress] = useState(0)
  const [isWorking, setIsWorking] = useState(false)

  useEffect(() => {
    if (isWorking && currentTask) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsWorking(false)
            // Reward
            updateMoney(currentTask.money)
            addExperience(currentTask.xp)
            updateSkill('frontend', 20)
            setCurrentTask(null)
            return 0
          }
          return prev + 10
        })
      }, 500)
      return () => clearInterval(interval)
    }
  }, [isWorking, currentTask])

  const startTask = (task: typeof tasks[0]) => {
    setCurrentTask(task)
    setProgress(0)
    setIsWorking(true)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 pb-20">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">💼 Work</h1>
          <p className="text-sm text-slate-400">
            Level {player?.level} • ${player?.money.toLocaleString()}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {isWorking && currentTask ? (
          <Card className="p-6">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">💻</div>
              <h2 className="text-xl font-semibold">{currentTask.name}</h2>
              <p className="text-slate-400">Working...</p>
            </div>
            <Progress value={progress} color="primary" />
            <div className="mt-4 text-center text-sm text-slate-400">
              {progress}% complete
            </div>
          </Card>
        ) : (
          <>
            <h2 className="text-lg font-semibold mb-4">Available Tasks</h2>
            <div className="space-y-3">
              {tasks.map((task) => (
                <Card key={task.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{task.name}</h3>
                      <div className="flex gap-4 mt-1 text-sm text-slate-400">
                        <span>⚡ {task.xp} XP</span>
                        <span>💰 ${task.money}</span>
                        <span>{task.difficulty}</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => startTask(task)}
                      disabled={isWorking}
                    >
                      Start
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  )
}
