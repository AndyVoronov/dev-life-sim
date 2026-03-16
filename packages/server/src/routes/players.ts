import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = Router()

// In-memory storage (replace with database later)
const players = new Map<string, any>()
const companies = new Map<string, any>()

// Get player by ID
router.get('/:id', (req, res) => {
  const player = players.get(req.params.id)
  if (!player) {
    return res.status(404).json({ error: 'Player not found' })
  }
  res.json(player)
})

// Create new player
router.post('/', (req, res) => {
  const { username, email } = req.body
  
  if (!username || !email) {
    return res.status(400).json({ error: 'Username and email required' })
  }

  const id = uuidv4()
  const player = {
    id,
    username,
    email,
    profile: {
      displayName: username,
      level: 1,
      experience: 0,
      money: 1000,
      reputation: 0,
    },
    skills: {
      frontend: { level: 1, experience: 0 },
      backend: { level: 1, experience: 0 },
      devops: { level: 1, experience: 0 },
      mobile: { level: 1, experience: 0 },
      ai: { level: 1, experience: 0 },
    },
    createdAt: new Date(),
  }

  players.set(id, player)
  res.status(201).json(player)
})

// Update player
router.patch('/:id', (req, res) => {
  const player = players.get(req.params.id)
  if (!player) {
    return res.status(404).json({ error: 'Player not found' })
  }

  const updates = req.body
  Object.assign(player.profile, updates)
  players.set(req.params.id, player)
  
  res.json(player)
})

// Get player skills
router.get('/:id/skills', (req, res) => {
  const player = players.get(req.params.id)
  if (!player) {
    return res.status(404).json({ error: 'Player not found' })
  }
  res.json(player.skills)
})

// Update skill
router.post('/:id/skills/:skillId/experience', (req, res) => {
  const player = players.get(req.params.id)
  if (!player) {
    return res.status(404).json({ error: 'Player not found' })
  }

  const { amount } = req.body
  const skill = player.skills[req.params.skillId]
  
  if (!skill) {
    return res.status(404).json({ error: 'Skill not found' })
  }

  skill.experience += amount
  
  // Level up check
  const xpPerLevel = 100 * skill.level
  while (skill.experience >= xpPerLevel) {
    skill.experience -= xpPerLevel
    skill.level++
  }

  players.set(req.params.id, player)
  res.json(skill)
})

export default router
