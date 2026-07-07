// Resume API service — all API calls for the resume feature
// Business logic belongs in components/hooks; this layer only handles HTTP

import api from '@/lib/api'
import type { APIResponse, PaginatedResponse } from '@/types/api.types'
import type { Resume, ResumeAnalysis } from '@/types/resume.types'

export const resumeService = {
  /** Upload a new resume */
  upload: async (file: File, token: string): Promise<APIResponse<{ resumeId: string; resumeScore: number }>> => {
    const formData = new FormData()
    formData.append('file', file)
    const { data } = await api.post('/resumes/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` },
    })
    return data
  },

  /** Get active resume */
  getResume: async (token: string): Promise<APIResponse<Resume>> => {
    const { data } = await api.get('/resumes', { headers: { Authorization: `Bearer ${token}` } })
    return data
  },

  /** Delete a resume by ID */
  deleteResume: async (resumeId: string, token: string): Promise<APIResponse<null>> => {
    const { data } = await api.delete(`/resumes/${resumeId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },

  /** Get resume analysis */
  getAnalysis: async (resumeId: string, token: string): Promise<APIResponse<ResumeAnalysis>> => {
    const { data } = await api.get(`/resumes/${resumeId}/analysis`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },

  /** Compare two resumes */
  compare: async (resume1: string, resume2: string, token: string): Promise<APIResponse<unknown>> => {
    const { data } = await api.get('/resumes/compare', {
      params: { resume1, resume2 },
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },
}
