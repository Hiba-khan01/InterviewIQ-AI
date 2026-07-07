export interface FeedbackReport {
  _id: string
  sessionId: string
  overallScore: number
  grade: 'A+' | 'A' | 'B+' | 'B' | 'C+' | 'C' | 'D' | 'F'
  communication: number
  technical: number
  grammar: number
  confidence: number
  behavioral: number
  problemSolving: number
  professionalism: number
  strengths: string[]
  weaknesses: string[]
  improvements: string[]
  learningResources: FeedbackLearningResource[]
  summary: string
  createdAt: string
}

export interface QuestionFeedback {
  _id: string
  reportId: string
  questionId: string
  question: string
  answer: string
  score: number
  strengths: string[]
  weaknesses: string[]
  expectedAnswer: string
  improvedAnswer: string
  aiFeedback: string
  resources: FeedbackLearningResource[]
}

export interface FeedbackLearningResource {
  title: string
  url: string
  type: 'course' | 'book' | 'video' | 'documentation' | 'platform'
  skill: string
}

export interface LearningRoadmapItem {
  skill: string
  priority: 'High' | 'Medium' | 'Low'
  resources: FeedbackLearningResource[]
  estimatedTime: string
  practiceQuestions: string[]
}
