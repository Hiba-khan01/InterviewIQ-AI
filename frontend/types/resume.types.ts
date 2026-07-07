export interface Resume {
  _id: string
  userId: string
  fileName: string
  fileUrl: string
  fileType: 'pdf' | 'docx'
  cloudinaryId: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface ResumeAnalysis {
  _id: string
  resumeId: string
  resumeScore: number
  atsScore: number
  grammarScore: number
  formattingScore: number
  industryMatch: number
  skills: string[]
  missingSkills: MissingSkill[]
  strengths: string[]
  weaknesses: string[]
  suggestions: Suggestion[]
  learningResources: LearningResource[]
  summary: string
  createdAt: string
}

export interface MissingSkill {
  skill: string
  priority: 'High' | 'Medium' | 'Low'
  importance: string
}

export interface Suggestion {
  type: 'grammar' | 'formatting' | 'keyword' | 'project' | 'ats'
  original: string
  improved: string
  explanation: string
}

export interface LearningResource {
  title: string
  url: string
  type: 'course' | 'book' | 'video' | 'documentation' | 'platform'
  skill: string
}

export interface UploadResumePayload {
  file: File
}
