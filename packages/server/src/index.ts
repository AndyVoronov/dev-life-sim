import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { createServer } from 'http'
import { Server as SocketServer } from 'socket.io'
import dotenv from 'dotenv'

import playersRouter from './routes/players'
import companiesRouter from './routes/companies'

dotenv.config()

const app = express()
const httpServer = createServer(app)
const io = new SocketServer(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

// Middleware
app.use(cors())
app.use(helmet())
app.use(express.json())

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// API Routes
app.get('/api/v1', (req, res) => {
  res.json({
    name: 'DevLife API',
    version: '1.0.0',
    endpoints: [
      '/api/v1/players',
      '/api/v1/companies',
      '/api/v1/market',
      '/api/v1/social',
    ]
  })
})

// Routes
app.use('/api/v1/players', playersRouter)
app.use('/api/v1/companies', companiesRouter)

// Socket.io
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id)

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id)
  })

  // Game events
  socket.on('player:move', (data) => {
    socket.broadcast.emit('player:moved', data)
  })

  socket.on('chat:message', (data) => {
    io.emit('chat:message', data)
  })
})

// Start server
const PORT = process.env.PORT || 3001

httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📡 WebSocket enabled`)
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`)
})

export { app, io }
