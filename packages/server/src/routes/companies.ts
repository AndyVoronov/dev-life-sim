import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = Router()

// In-memory storage
const companies = new Map<string, any>()

// Get company by ID
router.get('/:id', (req, res) => {
  const company = companies.get(req.params.id)
  if (!company) {
    return res.status(404).json({ error: 'Company not found' })
  }
  res.json(company)
})

// Create company
router.post('/', (req, res) => {
  const { name, type, ownerId } = req.body
  
  if (!name || !type || !ownerId) {
    return res.status(400).json({ error: 'Name, type, and ownerId required' })
  }

  const id = uuidv4()
  const slug = name.toLowerCase().replace(/\s+/g, '-')
  
  const company = {
    id,
    name,
    slug,
    type,
    ownerId,
    valuation: 50000,
    money: 10000,
    employees: [{
      id: uuidv4(),
      playerId: ownerId,
      role: 'ceo',
      salary: 0,
      equity: 1.0,
      startDate: new Date(),
    }],
    stats: {
      revenue: 0,
      expenses: 0,
      users: 0,
      projects: 0,
    },
    createdAt: new Date(),
  }

  companies.set(id, company)
  res.status(201).json(company)
})

// Get company finances
router.get('/:id/finances', (req, res) => {
  const company = companies.get(req.params.id)
  if (!company) {
    return res.status(404).json({ error: 'Company not found' })
  }
  
  res.json({
    valuation: company.valuation,
    money: company.money,
    revenue: company.stats.revenue,
    expenses: company.stats.expenses,
  })
})

// Hire employee
router.post('/:id/hire', (req, res) => {
  const company = companies.get(req.params.id)
  if (!company) {
    return res.status(404).json({ error: 'Company not found' })
  }

  const { playerId, role, salary } = req.body
  
  const employee = {
    id: uuidv4(),
    playerId,
    role,
    salary,
    equity: 0,
    startDate: new Date(),
  }

  company.employees.push(employee)
  companies.set(req.params.id, company)
  
  res.status(201).json(employee)
})

export default router
