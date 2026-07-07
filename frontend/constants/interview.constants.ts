import type { Difficulty, InterviewType } from '@/types/api.types'

export const INTERVIEW_TYPES: { value: InterviewType; label: string; description: string }[] = [
  { value: 'Technical', label: 'Technical', description: 'Data structures, algorithms, coding' },
  { value: 'Behavioral', label: 'Behavioral', description: 'STAR-based situational questions' },
  { value: 'HR', label: 'HR', description: 'Culture fit, motivation, career goals' },
  { value: 'Mixed', label: 'Mixed', description: 'Combination of all types' },
  { value: 'Coding', label: 'Coding', description: 'Live coding challenges' },
  { value: 'System Design', label: 'System Design', description: 'Architecture and scalability' },
]

export const DIFFICULTY_LEVELS: { value: Difficulty; label: string; color: string }[] = [
  { value: 'Easy', label: 'Easy', color: 'text-green-500' },
  { value: 'Medium', label: 'Medium', color: 'text-amber-500' },
  { value: 'Hard', label: 'Hard', color: 'text-red-500' },
  { value: 'Adaptive', label: 'Adaptive', color: 'text-violet-500' },
]

export const INTERVIEW_DURATIONS = [
  { value: 15, label: '15 minutes' },
  { value: 30, label: '30 minutes' },
  { value: 45, label: '45 minutes' },
  { value: 60, label: '60 minutes' },
  { value: 90, label: '90 minutes' },
  { value: 120, label: '120 minutes' },
]

export const EXPERIENCE_LEVELS = [
  { value: 'Fresher', label: 'Fresher (0-1 year)' },
  { value: 'Junior', label: 'Junior (1-2 years)' },
  { value: 'Mid', label: 'Mid-level (2-5 years)' },
  { value: 'Senior', label: 'Senior (5-8 years)' },
  { value: 'Lead', label: 'Lead (8-12 years)' },
  { value: 'Principal', label: 'Principal (12+ years)' },
]
