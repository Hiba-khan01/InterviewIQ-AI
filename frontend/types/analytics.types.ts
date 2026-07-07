export interface AnalyticsDashboard {
  averageScore: number
  highestScore: number
  lowestScore: number
  resumeScore: number
  totalInterviews: number
  weeklyProgress: WeeklyProgress[]
  monthlyProgress: MonthlyProgress[]
  weakSkills: SkillStat[]
  strongSkills: SkillStat[]
  recentInterviews: RecentInterview[]
}

export interface WeeklyProgress {
  week: string
  score: number
  interviews: number
}

export interface MonthlyProgress {
  month: string
  score: number
  interviews: number
  resumeScore: number
}

export interface SkillStat {
  skill: string
  score: number
  trend: 'up' | 'down' | 'stable'
}

export interface RecentInterview {
  _id: string
  jobRole: string
  company: string
  score: number
  date: string
  type: string
  duration: number
}

export interface ScoreTrend {
  date: string
  overall: number
  communication: number
  technical: number
  grammar: number
}
