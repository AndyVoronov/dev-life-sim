# DevLife Simulator - Server

Node.js backend API for DevLife Simulator.

## Tech Stack

- **Runtime:** Node.js 20+
- **Framework:** Express
- **Real-time:** Socket.io
- **Database:** PostgreSQL (planned)
- **Cache:** Redis (planned)
- **Language:** TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## API Endpoints

### Players
- `GET /api/v1/players/:id` - Get player by ID
- `POST /api/v1/players` - Create new player
- `PATCH /api/v1/players/:id` - Update player
- `GET /api/v1/players/:id/skills` - Get player skills
- `POST /api/v1/players/:id/skills/:skillId/experience` - Add skill experience

### Companies
- `GET /api/v1/companies/:id` - Get company by ID
- `POST /api/v1/companies` - Create company
- `GET /api/v1/companies/:id/finances` - Get company finances
- `POST /api/v1/companies/:id/hire` - Hire employee

### Market (planned)
- `GET /api/v1/market/jobs` - List jobs
- `POST /api/v1/market/jobs` - Post job
- `POST /api/v1/market/jobs/:id/apply` - Apply to job

### Social (planned)
- `GET /api/v1/social/:id/connections` - Get connections
- `POST /api/v1/social/:id/connect` - Add connection
- `GET /api/v1/social/:id/messages` - Get messages

## WebSocket Events

### Client → Server
- `player:move` - Player movement
- `chat:message` - Chat message

### Server → Client
- `player:moved` - Broadcast movement
- `chat:message` - Broadcast message

## Environment Variables

Create a `.env` file:

```env
PORT=3001
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/devlife
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-secret-key
CLIENT_URL=http://localhost:3000
```

## Project Structure

```
src/
├── index.ts          # Main server entry
├── routes/           # API routes
│   ├── players.ts
│   └── companies.ts
├── middleware/       # Express middleware
├── services/         # Business logic
├── db/              # Database setup
└── utils/           # Utilities
```

## Scripts

```bash
npm run dev      # Development with hot reload
npm run build    # Build TypeScript
npm run start    # Production server
npm run lint     # Run ESLint
```

## License

MIT
