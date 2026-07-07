// Interview API service — stubs for all interview endpoints

import api from '@/lib/api'
import type { APIResponse, PaginatedResponse } from '@/types/api.types'
import type {
  Interview,
  InterviewQuestion,
  InterviewSession,
  CreateInterviewPayload,
  LiveSessionToken,
} from '@/types/interview.types'

export const interviewService = {
  createInterview: async (
    payload: CreateInterviewPayload,
    token: string,
  ): Promise<APIResponse<{ interviewId: string }>> => {
    const { data } = await api.post('/interviews', payload, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },

  getInterview: async (id: string, token: string): Promise<APIResponse<Interview>> => {
    const { data } = await api.get(`/interviews/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },

  getInterviews: async (
    params: Record<string, unknown>,
    token: string,
  ): Promise<APIResponse<PaginatedResponse<Interview>>> => {
    const { data } = await api.get('/interviews', {
      params,
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },

  deleteInterview: async (id: string, token: string): Promise<APIResponse<null>> => {
    const { data } = await api.delete(`/interviews/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },

  generateQuestions: async (
    interviewId: string,
    token: string,
  ): Promise<APIResponse<{ questions: InterviewQuestion[] }>> => {
    const { data } = await api.post(`/interviews/${interviewId}/questions/generate`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },

  getQuestions: async (
    interviewId: string,
    token: string,
  ): Promise<APIResponse<InterviewQuestion[]>> => {
    const { data } = await api.get(`/interviews/${interviewId}/questions`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },

  createSession: async (
    interviewId: string,
    token: string,
  ): Promise<APIResponse<LiveSessionToken>> => {
    const { data } = await api.post('/sessions', { interviewId }, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },

  endSession: async (sessionId: string, token: string): Promise<APIResponse<InterviewSession>> => {
    const { data } = await api.post(`/sessions/${sessionId}/end`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },
}
