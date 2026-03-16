'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { useGameStore } from '@/stores/gameStore'

const companyTypes = [
  { id: 'software', name: 'Software', icon: '💻', description: 'SaaS, Apps, Tools' },
  { id: 'ecommerce', name: 'E-Commerce', icon: '🛒', description: 'Marketplace, Retail' },
  { id: 'fintech', name: 'Fintech', icon: '💳', description: 'Payments, Banking' },
  { id: 'consulting', name: 'Consulting', icon: '💼', description: 'Advisory, Services' },
]

export default function CompanyPage() {
  const { player, updateMoney } = useGameStore()
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [companyName, setCompanyName] = useState('')
  const [companyType, setCompanyType] = useState('')
  const [company, setCompany] = useState<{
    name: string
    type: string
    valuation: number
    employees: number
    revenue: number
  } | null>(null)

  const handleCreate = () => {
    if (!companyName || !companyType) return

    const cost = 10000
    if (player && player.money >= cost) {
      updateMoney(-cost)
      setCompany({
        name: companyName,
        type: companyType,
        valuation: 50000,
        employees: 1,
        revenue: 0,
      })
      setShowCreateModal(false)
      setCompanyName('')
      setCompanyType('')
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 pb-20">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">🏢 Company</h1>
            <p className="text-sm text-slate-400">
              ${player?.money.toLocaleString()} available
            </p>
          </div>
          {!company && (
            <Button onClick={() => setShowCreateModal(true)}>
              Create Company
            </Button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {company ? (
          <>
            {/* Company Info */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{company.name}</h2>
                  <Badge variant="success">Active</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Valuation</p>
                    <p className="text-xl font-bold">${company.valuation.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Employees</p>
                    <p className="text-xl font-bold">{company.employees}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Revenue</p>
                    <p className="text-xl font-bold">${company.revenue.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Type</p>
                    <p className="text-xl font-bold capitalize">{company.type}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">💼 Hire Employee</h3>
                <p className="text-sm text-slate-400 mb-4">
                  Find talented developers for your team
                </p>
                <Button variant="secondary">View Candidates</Button>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">📊 Projects</h3>
                <p className="text-sm text-slate-400 mb-4">
                  Manage your company projects
                </p>
                <Button variant="secondary">View Projects</Button>
              </Card>
            </div>
          </>
        ) : (
          <Card className="p-8 text-center">
            <div className="text-6xl mb-4">🏢</div>
            <h2 className="text-xl font-semibold mb-2">No Company Yet</h2>
            <p className="text-slate-400 mb-6">
              Create your first company to start building your empire
            </p>
            <Button onClick={() => setShowCreateModal(true)}>
              Create Company ($10,000)
            </Button>
          </Card>
        )}
      </main>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <h2 className="text-xl font-semibold">Create Company</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500"
                  placeholder="TechStartup Inc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {companyTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setCompanyType(type.id)}
                      className={`p-3 rounded-lg border text-left ${
                        companyType === type.id
                          ? 'border-primary-500 bg-primary-500/10'
                          : 'border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <div className="text-2xl mb-1">{type.icon}</div>
                      <div className="font-medium text-sm">{type.name}</div>
                      <div className="text-xs text-slate-400">{type.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-sm text-slate-400">
                Cost: <span className="text-white font-medium">$10,000</span>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  className="flex-1"
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1"
                  onClick={handleCreate}
                  disabled={!companyName || !companyType || (player?.money || 0) < 10000}
                >
                  Create
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
