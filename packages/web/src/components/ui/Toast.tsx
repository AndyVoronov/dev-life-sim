import { create } from 'zustand'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

interface Toast {
  id: string
  type: ToastType
  title: string
  message?: string
  duration?: number
}

interface ToastStore {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (toast) => {
    const id = Math.random().toString(36).substr(2, 9)
    set((state) => ({
      toasts: [...state.toasts, { ...toast, id }],
    }))

    // Auto remove
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }))
    }, toast.duration || 5000)
  },
  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    }))
  },
}))

const typeStyles: Record<ToastType, string> = {
  success: 'bg-emerald-900/90 border-emerald-500',
  error: 'bg-rose-900/90 border-rose-500',
  warning: 'bg-amber-900/90 border-amber-500',
  info: 'bg-primary-900/90 border-primary-500',
}

const typeIcons: Record<ToastType, string> = {
  success: '✓',
  error: '✕',
  warning: '⚠',
  info: 'ℹ',
}

export function Toaster() {
  const { toasts, removeToast } = useToastStore()

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            'flex items-start gap-3 p-4 rounded-lg border shadow-lg backdrop-blur-sm',
            'animate-in slide-in-from-right fade-in duration-300',
            typeStyles[toast.type]
          )}
        >
          <span className="text-lg">{typeIcons[toast.type]}</span>
          <div className="flex-1">
            <p className="font-medium text-sm">{toast.title}</p>
            {toast.message && (
              <p className="text-xs opacity-80 mt-0.5">{toast.message}</p>
            )}
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-slate-400 hover:text-slate-300"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )
}

function cn(...args: any[]) {
  return args.filter(Boolean).join(' ')
}
