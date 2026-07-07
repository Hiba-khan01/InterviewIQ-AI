'use client'

import React, { useRef, useState } from 'react'
import type { Metadata } from 'next'
import { UploadCloud, FileText, Trash2, CheckCircle2, AlertTriangle, Eye } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { useResumeHooks } from '@/hooks/useResume'
import { toast } from 'sonner'
import { BRAND_COLORS } from '@/constants/brand.constants'
import { AreaLineChart } from '@/components/shared/Charts' // Reused for score mockup

// Note: Next.js doesn't support exporting metadata from 'use client' pages, so title is managed via layout or inherently.

export default function ResumePage() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [dragActive, setDragActive] = useState(false)

  // React Query Hooks
  const { useGetHistory, useGetAnalysis, useUploadResume, useDeleteResume } = useResumeHooks()
  
  const { data: resumes = [], isLoading: isHistoryLoading } = useGetHistory()
  const activeResume = resumes.find(r => r.isActive)
  
  const { data: analysis, isLoading: isAnalysisLoading } = useGetAnalysis(activeResume?.id || null)
  
  const uploadMutation = useUploadResume()
  const deleteMutation = useDeleteResume()

  // Drag and drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await processFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      await processFile(e.target.files[0])
    }
  }

  const processFile = async (file: File) => {
    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!validTypes.includes(file.type)) {
      toast.error('Invalid file type. Please upload a PDF or DOCX.')
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size exceeds 5MB limit.')
      return
    }

    try {
      toast.info('Uploading resume...')
      await uploadMutation.mutateAsync(file)
      toast.success('Resume uploaded and analysis started!')
    } catch (e: any) {
      toast.error(e?.response?.data?.message || 'Failed to upload Resume.')
    }
  }

  const handleDelete = async (id: string) => {
    if(confirm("Are you sure you want to delete this resume?")) {
      toast.loading("Deleting resume...", { id: "delete" })
      try {
        await deleteMutation.mutateAsync(id)
        toast.success("Resume deleted.", { id: "delete" })
      } catch (e) {
        toast.error("Failed to delete.", { id: "delete" })
      }
    }
  }

  return (
    <div className="space-y-8 animate-fade-in fade-in pb-12">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Resume Management</h1>
        <p className="text-slate-500 mt-1">Upload your resume to receive AI-powered evaluations and keyword optimizations.</p>
      </div>

      {/* Upload Zone */}
      <Card className="border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <CardContent className="p-0">
          <form 
            onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
            className={`w-full flex flex-col items-center justify-center p-12 transition-colors rounded-xl ${dragActive ? 'bg-blue-50/50 dark:bg-blue-900/10 border-blue-500' : ''}`}
          >
            <input ref={fileInputRef} type="file" className="hidden" accept=".pdf,.docx" onChange={handleChange} />
            <div className="h-16 w-16 bg-white dark:bg-slate-950 rounded-full shadow-sm flex items-center justify-center mb-4 text-blue-600">
              <UploadCloud className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              {uploadMutation.isPending ? 'Uploading & Analyzing...' : 'Drag & Drop your resume here'}
            </h3>
            <p className="text-sm text-slate-500 mb-6">Supports PDF and DOCX (Max 5MB).</p>
            <Button 
              type="button" 
              onClick={() => fileInputRef.current?.click()} 
              disabled={uploadMutation.isPending}
            >
              {activeResume ? 'Replace Resume' : 'Browse Files'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Analysis Result (Mocked Response Display) */}
      {activeResume && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1 border-blue-100 dark:border-blue-900/50 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-blue-600"><FileText className="h-32 w-32" /></div>
            <CardHeader>
              <CardTitle>Active Resume</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="font-semibold text-lg max-w-[80%] truncate" title={activeResume.fileName}>
                  {activeResume.fileName}
                </p>
                <Badge variant="success" className="mt-2">Active Target</Badge>
              </div>
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-sm text-slate-500 mb-1">ATS Compatibility Score</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {analysis ? analysis.atsScore : '--'}
                  </span>
                  <span className="text-sm font-medium text-slate-500 mb-1">/ 100</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="w-full relative z-10" asChild>
                  <a href={activeResume.fileUrl} target="_blank" rel="noreferrer">
                    <Eye className="w-4 h-4 mr-2" /> View File
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500"/> AI Feedback & Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isAnalysisLoading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/2"></div>
                </div>
              ) : analysis ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" /> Strengths
                    </h4>
                    <ul className="space-y-2">
                      {analysis.strengths.map((str, i) => (
                         <li key={i} className="text-sm text-slate-600 dark:text-slate-400 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-green-500 before:rounded-full">{str}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500" /> Improvement Areas
                    </h4>
                    <ul className="space-y-2">
                      {analysis.weaknesses.map((wk, i) => (
                         <li key={i} className="text-sm text-slate-600 dark:text-slate-400 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-amber-500 before:rounded-full">{wk}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-slate-500">Analysis unavailable.</p>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* History Table */}
      <Card>
        <CardHeader>
          <CardTitle>History</CardTitle>
        </CardHeader>
        <CardContent>
          {isHistoryLoading ? (
            <p className="text-sm text-slate-500">Loading history...</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>File Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resumes.map((resume) => (
                  <TableRow key={resume.id}>
                    <TableCell className="font-medium">{resume.fileName}</TableCell>
                    <TableCell className="uppercase">{resume.fileType}</TableCell>
                    <TableCell>
                      {resume.isActive ? <Badge variant="success">Active</Badge> : <Badge variant="secondary">Archived</Badge>}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10" onClick={() => handleDelete(resume.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {resumes.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-6 text-slate-500">No resumes uploaded yet.</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
      
    </div>
  )
}
