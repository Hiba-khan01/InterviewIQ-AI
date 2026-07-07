// Feedback API service stubs

import api from '@/lib/api'
import type { APIResponse } from '@/types/api.types'
import type { FeedbackReport, QuestionFeedback } from '@/types/feedback.types'

export const feedbackService = {
  getReport: async (sessionId: string, token: string): Promise<APIResponse<FeedbackReport>> => {
    const { data } = await api.get(`/feedback/${sessionId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },

  getQuestionFeedback: async (
    sessionId: string,
    token: string,
  ): Promise<APIResponse<QuestionFeedback[]>> => {
    const { data } = await api.get(`/feedback/${sessionId}/questions`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },

  downloadPDF: async (sessionId: string, token: string): Promise<Blob> => {
    const { data } = await api.get(`/feedback/${sessionId}/pdf`, {
      responseType: 'blob',
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },

  downloadJSON: async (sessionId: string, token: string): Promise<Blob> => {
    const { data } = await api.get(`/feedback/${sessionId}/json`, {
      responseType: 'blob',
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },
}
