import { SCORE_COLORS } from '@/constants/brand.constants'

/** Get score color class based on score value */
export function getScoreColor(score: number): {
  text: string
  bg: string
  label: string
} {
  if (score >= SCORE_COLORS.excellent.min) return SCORE_COLORS.excellent
  if (score >= SCORE_COLORS.good.min) return SCORE_COLORS.good
  if (score >= SCORE_COLORS.average.min) return SCORE_COLORS.average
  return SCORE_COLORS.poor
}

/** Get score grade letter */
export function getScoreGrade(score: number): string {
  if (score >= 95) return 'A+'
  if (score >= 90) return 'A'
  if (score >= 85) return 'B+'
  if (score >= 80) return 'B'
  if (score >= 75) return 'C+'
  if (score >= 70) return 'C'
  if (score >= 60) return 'D'
  return 'F'
}
