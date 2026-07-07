import type { Difficulty, InterviewType, InterviewStatus } from './api.types'

export interface Interview {
  _id: string
  userId: string
  jobRole: string
  company: string
  difficulty: Difficulty
  interviewType: InterviewType
  duration: number
  status: InterviewStatus
  createdAt: string
}

export interface InterviewQuestion {
  _id: string
  interviewId: string
  order: number
  question: string
  type: InterviewType
  difficulty: Difficulty
  expectedAnswer: string
  followUpQuestions: string[]
  createdAt: string
}

export interface InterviewSession {
  _id: string
  interviewId: string
  livekitRoomId: string
  startedAt: string
  endedAt: string
  duration: number
  recordingUrl: string
  status: 'Active' | 'Completed' | 'Abandoned'
}

export interface Transcript {
  _id: string
  sessionId: string
  questionId: string
  question: string
  candidateAnswer: string
  transcript: string
  confidence: number
  timestamps: TranscriptTimestamp[]
  createdAt: string
}

export interface TranscriptTimestamp {
  text: string
  start: number
  end: number
}

export interface CreateInterviewPayload {
  jobRole: string
  company?: string
  difficulty: Difficulty
  type: InterviewType
  duration: number
  experience?: string
}

export interface LiveSessionToken {
  roomId: string
  token: string
}
