import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Interviews' }

export default function InterviewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Interviews</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
          Create and manage your mock interviews
        </p>
      </div>
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-16 text-center">
        <p className="text-slate-400">Interview management coming in Milestone 3</p>
      </div>
    </div>
  )
}
