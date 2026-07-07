// React Query cache key factories — ensures consistent cache invalidation

export const queryKeys = {
  // Users
  user: () => ['user'] as const,
  userMe: () => ['user', 'me'] as const,

  // Resumes
  resumes: () => ['resumes'] as const,
  resume: (id: string) => ['resumes', id] as const,
  resumeAnalysis: (resumeId: string) => ['resumes', resumeId, 'analysis'] as const,

  // Interviews
  interviews: (params?: Record<string, unknown>) => ['interviews', params] as const,
  interview: (id: string) => ['interviews', id] as const,
  interviewQuestions: (id: string) => ['interviews', id, 'questions'] as const,

  // Sessions
  session: (id: string) => ['sessions', id] as const,

  // Feedback
  feedback: (sessionId: string) => ['feedback', sessionId] as const,
  questionFeedback: (sessionId: string) => ['feedback', sessionId, 'questions'] as const,

  // Analytics
  analyticsDashboard: () => ['analytics', 'dashboard'] as const,
  analyticsScores: () => ['analytics', 'scores'] as const,
  analyticsSkills: () => ['analytics', 'skills'] as const,
  analyticsWeekly: () => ['analytics', 'weekly'] as const,
  analyticsMonthly: () => ['analytics', 'monthly'] as const,

  // History
  history: (params?: Record<string, unknown>) => ['history', params] as const,
  historyItem: (id: string) => ['history', id] as const,

  // Notifications
  notifications: () => ['notifications'] as const,

  // Settings
  settings: () => ['settings'] as const,
} as const
