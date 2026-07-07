// Brand color constants from brand guidelines

export const BRAND_COLORS = {
  blue: '#2563EB',
  purple: '#7C3AED',
  success: '#22C55E',
  warning: '#F59E0B',
  danger: '#EF4444',
  info: '#06B6D4',
} as const

// Score color mapping per brand guidelines
export const SCORE_COLORS = {
  excellent: { min: 90, color: 'text-green-500', bg: 'bg-green-500/10', label: 'Excellent' },
  good: { min: 80, color: 'text-blue-500', bg: 'bg-blue-500/10', label: 'Good' },
  average: { min: 70, color: 'text-amber-500', bg: 'bg-amber-500/10', label: 'Average' },
  poor: { min: 0, color: 'text-red-500', bg: 'bg-red-500/10', label: 'Needs Improvement' },
} as const

export const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
export const ALLOWED_FILE_TYPES = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'] as const
export const ALLOWED_RESUME_EXTENSIONS = ['.pdf', '.docx'] as const
