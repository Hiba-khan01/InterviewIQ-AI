// ============================================================
// API Response Types
// ============================================================

export interface APIResponse<T = unknown> {
  success: boolean
  message: string
  data: T
}

export interface APIError {
  success: false
  message: string
  errors: string[]
}

export interface PaginatedResponse<T> {
  page: number
  limit: number
  total: number
  pages: number
  items: T[]
}

// ============================================================
// Common Enums
// ============================================================

export type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Adaptive'

export type InterviewType =
  | 'Technical'
  | 'Behavioral'
  | 'HR'
  | 'Mixed'
  | 'Coding'
  | 'System Design'

export type InterviewStatus = 'Pending' | 'In Progress' | 'Completed' | 'Cancelled'

export type ExperienceLevel = 'Fresher' | 'Junior' | 'Mid' | 'Senior' | 'Lead' | 'Principal'

export type NotificationType = 'success' | 'info' | 'warning' | 'error' | 'interview' | 'resume'
