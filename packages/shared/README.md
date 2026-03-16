# DevLife Simulator - Shared Package

Shared types and utilities for DevLife Simulator monorepo.

## Installation

```bash
npm install @devlife/shared
```

## Usage

```typescript
import { Player, Company, Skill } from '@devlife/shared'
```

## Available Types

### Player
```typescript
interface Player {
  id: string
  email: string
  username: string
  profile: PlayerProfile
  skills: PlayerSkills
  stats: PlayerStats
}
```

### Company
```typescript
interface Company {
  id: string
  name: string
  type: CompanyType
  ownerId: string
  valuation: number
  employees: Employee[]
  projects: Project[]
  finances: CompanyFinances
}
```

### Skills
```typescript
interface SkillLevel {
  level: number
  experience: number
  maxLevel: number
}

interface PlayerSkills {
  [skillId: string]: SkillLevel
}
```

## License

MIT
