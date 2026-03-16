import axios from 'axios'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1'

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Players
export const playersApi = {
  get: (id: string) => api.get(`/players/${id}`),
  create: (data: { username: string; email: string }) => api.post('/players', data),
  update: (id: string, data: any) => api.patch(`/players/${id}`, data),
  getSkills: (id: string) => api.get(`/players/${id}/skills`),
  addSkillXP: (id: string, skillId: string, amount: number) => 
    api.post(`/players/${id}/skills/${skillId}/experience`, { amount }),
}

// Companies
export const companiesApi = {
  get: (id: string) => api.get(`/companies/${id}`),
  create: (data: { name: string; type: string; ownerId: string }) => 
    api.post('/companies', data),
  getFinances: (id: string) => api.get(`/companies/${id}/finances`),
  hire: (id: string, data: { playerId: string; role: string; salary: number }) =>
    api.post(`/companies/${id}/hire`, data),
}

// Market
export const marketApi = {
  getJobs: () => api.get('/market/jobs'),
  postJob: (data: any) => api.post('/market/jobs', data),
  apply: (jobId: string, playerId: string) =>
    api.post(`/market/jobs/${jobId}/apply`, { playerId }),
}

// Social
export const socialApi = {
  getConnections: (playerId: string) => api.get(`/social/${playerId}/connections`),
  addConnection: (playerId: string, targetId: string) =>
    api.post(`/social/${playerId}/connect`, { targetId }),
  getMessages: (playerId: string) => api.get(`/social/${playerId}/messages`),
  sendMessage: (from: string, to: string, content: string) =>
    api.post('/social/messages', { from, to, content }),
}

export default api
