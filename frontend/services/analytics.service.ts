// Analytics API service stubs

import api from '@/lib/api'
import type { APIResponse } from '@/types/api.types'
import type { AnalyticsDashboard, ScoreTrend } from '@/types/analytics.types'

export const analyticsService = {
  getDashboard: async (token: string): Promise<APIResponse<AnalyticsDashboard>> => {
    const { data } = await api.get('/analytics/dashboard', {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },

  getScoreTrend: async (token: string): Promise<APIResponse<ScoreTrend[]>> => {
    const { data } = await api.get('/analytics/scores', {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },

  getSkillProgress: async (token: string): Promise<APIResponse<unknown>> => {
    const { data } = await api.get('/analytics/skills', {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },

  getWeeklyProgress: async (token: string): Promise<APIResponse<unknown>> => {
    const { data } = await api.get('/analytics/weekly', {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },

  getMonthlyProgress: async (token: string): Promise<APIResponse<unknown>> => {
    const { data } = await api.get('/analytics/monthly', {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },
}
