import { useState, useEffect } from 'react'

// Types from Telegram WebApp
declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready: () => void
        expand: () => void
        close: () => void
        MainButton: {
          text: string
          show: () => void
          hide: () => void
          onClick: (callback: () => void) => void
        }
        BackButton: {
          show: () => void
          hide: () => void
          onClick: (callback: () => void) => void
        }
        themeParams: {
          bg_color?: string
          text_color?: string
          hint_color?: string
          link_color?: string
          button_color?: string
          button_text_color?: string
          secondary_bg_color?: string
        }
        initDataUnsafe: {
          user?: {
            id: number
            first_name: string
            last_name?: string
            username?: string
            language_code?: string
          }
        }
      }
    }
  }
}

const tg = window.Telegram?.WebApp

export default function App() {
  const [player] = useState({
    name: tg?.initDataUnsafe.user?.first_name || 'Player',
    level: 1,
    money: 1000,
    xp: 0,
  })

  const [activeSection, setActiveSection] = useState<'skills' | 'work' | 'company'>('skills')

  useEffect(() => {
    if (tg) {
      tg.ready()
      tg.expand()
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-white pb-16">
      {/* Header */}
      <header className="sticky top-0 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">DevLife</h1>
            <p className="text-xs text-slate-400">Level {player.level} • ${player.money}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary-600" />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4">
        {activeSection === 'skills' && (
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-slate-400 mb-2">YOUR SKILLS</h2>
            {['Frontend', 'Backend', 'DevOps', 'Mobile', 'AI/ML'].map((skill) => (
              <div key={skill} className="bg-slate-800 rounded-lg p-3">
                <div className="flex justify-between mb-2">
                  <span className="text-sm">{skill}</span>
                  <span className="text-xs text-slate-400">Lv.1</span>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-500 w-1/4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'work' && (
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-slate-400 mb-2">AVAILABLE TASKS</h2>
            <div className="bg-slate-800 rounded-lg p-4">
              <p className="font-medium">💻 Fix Bug #1234</p>
              <p className="text-xs text-slate-400 mt-1">+50 XP • +$100</p>
              <button className="mt-3 w-full py-2 bg-primary-600 rounded-lg text-sm font-medium">
                Start Task
              </button>
            </div>
          </div>
        )}

        {activeSection === 'company' && (
          <div className="text-center py-8">
            <div className="text-4xl mb-3">🏢</div>
            <p className="text-slate-400 text-sm">No company yet</p>
            <button className="mt-4 px-4 py-2 bg-primary-600 rounded-lg text-sm">
              Create Company
            </button>
          </div>
        )}
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800">
        <div className="flex justify-around py-2">
          {(['skills', 'work', 'company'] as const).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 text-xs ${
                activeSection === section ? 'text-primary-500' : 'text-slate-400'
              }`}
            >
              {section === 'skills' && '🎯'}
              {section === 'work' && '💼'}
              {section === 'company' && '🏢'}
              <div className="mt-1 capitalize">{section}</div>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
