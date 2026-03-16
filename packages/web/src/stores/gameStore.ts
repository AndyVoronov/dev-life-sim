import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Player {
  id: string
  username: string
  displayName: string
  level: number
  experience: number
  money: number
  reputation: number
}

interface Skill {
  id: string
  name: string
  level: number
  experience: number
  maxExperience: number
}

interface GameState {
  player: Player | null
  skills: Skill[]
  isAuthenticated: boolean
  
  // Actions
  setPlayer: (player: Player) => void
  updateMoney: (amount: number) => void
  addExperience: (amount: number) => void
  updateSkill: (skillId: string, experience: number) => void
  logout: () => void
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      player: {
        id: '1',
        username: 'player1',
        displayName: 'Player One',
        level: 1,
        experience: 0,
        money: 1000,
        reputation: 0,
      },
      skills: [
        { id: 'frontend', name: 'Frontend', level: 1, experience: 0, maxExperience: 100 },
        { id: 'backend', name: 'Backend', level: 1, experience: 0, maxExperience: 100 },
        { id: 'devops', name: 'DevOps', level: 1, experience: 0, maxExperience: 100 },
        { id: 'mobile', name: 'Mobile', level: 1, experience: 0, maxExperience: 100 },
        { id: 'ai', name: 'AI/ML', level: 1, experience: 0, maxExperience: 100 },
      ],
      isAuthenticated: false,

      setPlayer: (player) => set({ player, isAuthenticated: true }),
      
      updateMoney: (amount) => {
        const { player } = get()
        if (player) {
          set({ player: { ...player, money: player.money + amount } })
        }
      },
      
      addExperience: (amount) => {
        const { player } = get()
        if (player) {
          const newXP = player.experience + amount
          const newLevel = Math.floor(Math.sqrt(newXP / 100)) + 1
          set({ player: { ...player, experience: newXP, level: newLevel } })
        }
      },
      
      updateSkill: (skillId, amount) => {
        const { skills } = get()
        const updated = skills.map(skill => {
          if (skill.id === skillId) {
            const newXP = skill.experience + amount
            const newLevel = Math.floor(newXP / skill.maxExperience) + 1
            return {
              ...skill,
              experience: newXP % skill.maxExperience,
              level: newLevel,
            }
          }
          return skill
        })
        set({ skills: updated })
      },
      
      logout: () => set({ player: null, isAuthenticated: false }),
    }),
    {
      name: 'devlife-game-storage',
    }
  )
)
