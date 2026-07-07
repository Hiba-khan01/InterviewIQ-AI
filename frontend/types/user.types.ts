import type { ExperienceLevel } from './api.types'

export interface User {
  _id: string
  clerkId: string
  name: string
  email: string
  avatar: string
  bio: string
  experience: ExperienceLevel
  currentRole: string
  skills: string[]
  linkedin: string
  github: string
  portfolio: string
  location: string
  theme: 'light' | 'dark' | 'system'
  language: string
  createdAt: string
  updatedAt: string
}

export interface UpdateProfilePayload {
  name?: string
  bio?: string
  experience?: ExperienceLevel
  currentRole?: string
  skills?: string[]
  linkedin?: string
  github?: string
  portfolio?: string
  location?: string
}
