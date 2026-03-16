// Player Types
export interface Player {
  id: string
  email: string
  username: string
  profile: PlayerProfile
  skills: PlayerSkills
  stats: PlayerStats
}

export interface PlayerProfile {
  displayName: string
  avatarUrl?: string
  bio?: string
  level: number
  experience: number
  money: number
  reputation: number
}

export interface PlayerSkills {
  [skillId: string]: SkillLevel
}

export interface SkillLevel {
  level: number
  experience: number
  maxLevel: number
}

export interface PlayerStats {
  totalEarnings: number
  companiesFounded: number
  employeesHired: number
  projectsCompleted: number
  connectionsCount: number
  playTimeHours: number
}

// Company Types
export interface Company {
  id: string
  name: string
  slug: string
  type: CompanyType
  ownerId: string
  valuation: number
  employees: Employee[]
  projects: Project[]
  finances: CompanyFinances
  createdAt: Date
}

export type CompanyType = 
  | 'software'
  | 'ecommerce'
  | 'fintech'
  | 'healthtech'
  | 'consulting'
  | 'agency'

export interface Employee {
  id: string
  playerId: string
  companyId: string
  role: EmployeeRole
  salary: number
  equity: number
  startDate: Date
  status: 'active' | 'terminated'
}

export type EmployeeRole = 
  | 'junior'
  | 'middle'
  | 'senior'
  | 'lead'
  | 'cto'
  | 'ceo'

export interface Project {
  id: string
  name: string
  type: ProjectType
  status: ProjectStatus
  progress: number
  deadline?: Date
  budget: number
}

export type ProjectType = 'client' | 'product' | 'internal'
export type ProjectStatus = 'planning' | 'active' | 'completed' | 'cancelled'

export interface CompanyFinances {
  revenue: number
  expenses: number
  profit: number
  cashBalance: number
}

// Market Types
export interface JobListing {
  id: string
  companyId: string
  title: string
  description: string
  salary: number
  type: 'full-time' | 'part-time' | 'contract'
  requirements: string[]
  postedAt: Date
}

export interface Investment {
  id: string
  investorId: string
  companyId: string
  amount: number
  equity: number
  type: 'angel' | 'seed' | 'series-a' | 'series-b'
  date: Date
}

// Social Types
export interface Connection {
  id: string
  playerId: string
  connectedPlayerId: string
  type: 'friend' | 'partner' | 'colleague'
  strength: number
  createdAt: Date
}

export interface Message {
  id: string
  senderId: string
  receiverId: string
  content: string
  timestamp: Date
  read: boolean
}

// Game Events
export interface GameEvent {
  type: string
  payload: any
  timestamp: Date
}

// API Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
}
