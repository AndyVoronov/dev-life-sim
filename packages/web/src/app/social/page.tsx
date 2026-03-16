'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

const mockConnections = [
  { id: '1', name: 'Alex Chen', role: 'CTO at TechCorp', level: 45, online: true },
  { id: '2', name: 'Maria Garcia', role: 'Founder at StartupXYZ', level: 38, online: false },
  { id: '3', name: 'James Wilson', role: 'Senior Developer', level: 52, online: true },
  { id: '4', name: 'Sarah Kim', role: 'Product Manager', level: 41, online: false },
]

export default function SocialPage() {
  const [activeTab, setActiveTab] = useState<'connections' | 'messages' | 'guilds'>('connections')

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 pb-20">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">👥 Social</h1>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-slate-800 bg-slate-900/80">
        <div className="container mx-auto px-4">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('connections')}
              className={`py-3 px-1 border-b-2 transition-colors ${
                activeTab === 'connections'
                  ? 'border-primary-500 text-primary-500'
                  : 'border-transparent text-slate-400 hover:text-slate-300'
              }`}
            >
              Connections
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`py-3 px-1 border-b-2 transition-colors ${
                activeTab === 'messages'
                  ? 'border-primary-500 text-primary-500'
                  : 'border-transparent text-slate-400 hover:text-slate-300'
              }`}
            >
              Messages
            </button>
            <button
              onClick={() => setActiveTab('guilds')}
              className={`py-3 px-1 border-b-2 transition-colors ${
                activeTab === 'guilds'
                  ? 'border-primary-500 text-primary-500'
                  : 'border-transparent text-slate-400 hover:text-slate-300'
              }`}
            >
              Guilds
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'connections' && (
          <div className="space-y-3">
            {mockConnections.map((connection) => (
              <Card key={connection.id} className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold">
                      {connection.name[0]}
                    </div>
                    {connection.online && (
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{connection.name}</h3>
                      <Badge variant="info" size="sm">Lv.{connection.level}</Badge>
                    </div>
                    <p className="text-sm text-slate-400">{connection.role}</p>
                  </div>
                  <Button size="sm" variant="ghost">Message</Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'messages' && (
          <Card className="p-8 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-medium mb-2">No Messages</h3>
            <p className="text-sm text-slate-400">
              Start a conversation with your connections
            </p>
          </Card>
        )}

        {activeTab === 'guilds' && (
          <Card className="p-8 text-center">
            <div className="text-4xl mb-4">⚔️</div>
            <h3 className="font-medium mb-2">No Guild</h3>
            <p className="text-sm text-slate-400 mb-4">
              Join a guild to compete with other players
            </p>
            <Button>Browse Guilds</Button>
          </Card>
        )}
      </main>
    </div>
  )
}
