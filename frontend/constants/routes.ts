export const ROUTES = {
  // Public
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',

  // Protected
  DASHBOARD: '/dashboard',
  RESUME: '/resume',
  INTERVIEWS: '/interview',
  INTERVIEW: (id: string) => `/interview/${id}`,
  INTERVIEW_SESSION: (id: string) => `/interview/${id}/session`,
  FEEDBACK: '/feedback',
  FEEDBACK_REPORT: (sessionId: string) => `/feedback/${sessionId}`,
  ANALYTICS: '/analytics',
  HISTORY: '/history',
  PROFILE: '/profile',
  SETTINGS: '/settings',
} as const
