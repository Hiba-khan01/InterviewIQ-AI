import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api, setAuthToken } from '@/lib/api'
import { useAuth } from '@clerk/nextjs'

// --- Interfaces matching backend schemas ---
export interface ResumeSchema {
  id: string
  fileName: string
  fileUrl: string
  fileType: string
  isActive: bool
}

export interface ResumeAnalysis {
  resumeScore: number
  atsScore: number
  skills: string[]
  missingSkills: string[]
  strengths: string[]
  weaknesses: string[]
  suggestions: string[]
}

// --- Hooks ---
export function useResumeHooks() {
  const queryClient = useQueryClient()
  const { getToken } = useAuth()

  // Helper to ensure Axios has the raw JWT before each request
  const requireToken = async () => {
    const token = await getToken()
    setAuthToken(token)
    return token
  }

  const useGetHistory = () => {
    return useQuery({
      queryKey: ['resumes'],
      queryFn: async () => {
        await requireToken()
        const { data } = await api.get('/resumes')
        return data.data as ResumeSchema[]
      },
    })
  }

  const useGetAnalysis = (resumeId: string | null) => {
    return useQuery({
      queryKey: ['resumeAnalysis', resumeId],
      queryFn: async () => {
        await requireToken()
        const { data } = await api.get(`/resumes/${resumeId}/analysis`)
        return data.data as ResumeAnalysis
      },
      enabled: !!resumeId,
    })
  }

  const useUploadResume = () => {
    return useMutation({
      mutationFn: async (file: File) => {
        await requireToken()
        const formData = new FormData()
        formData.append('file', file)
        
        const { data } = await api.post('/resumes/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        return data.data
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['resumes'] })
      },
    })
  }

  const useDeleteResume = () => {
    return useMutation({
      mutationFn: async (resumeId: string) => {
        await requireToken()
        await api.delete(`/resumes/${resumeId}`)
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['resumes'] })
      },
    })
  }

  return {
    useGetHistory,
    useGetAnalysis,
    useUploadResume,
    useDeleteResume
  }
}
